import type { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  console.log('=== API Request Started ===');
  console.log('Method:', req.method);
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('❌ Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('📝 Request body:', JSON.stringify(req.body, null, 2));
    const { name, asistencia, alergias, bus, canciones } = req.body;

    // Validate required fields
    if (!name || !asistencia || !bus) {
      console.log('❌ Missing required fields:', { name: !!name, asistencia: !!asistencia, bus: !!bus });
      return res.status(400).json({ error: 'Missing required fields' });
    }
    console.log('✅ All required fields present');

    // Check environment variables
    console.log('🔧 Checking environment variables:');
    console.log('  GOOGLE_CLIENT_EMAIL:', process.env.GOOGLE_CLIENT_EMAIL ? '✅ Set' : '❌ Missing');
    console.log('  GOOGLE_PRIVATE_KEY:', process.env.GOOGLE_PRIVATE_KEY ? '✅ Set' : '❌ Missing');
    console.log('  GOOGLE_PRIVATE_KEY_BASE64:', process.env.GOOGLE_PRIVATE_KEY_BASE64 ? '✅ Set' : '❌ Missing');
    console.log('  GOOGLE_SHEET_ID:', process.env.GOOGLE_SHEET_ID ? '✅ Set' : '❌ Missing');

    const hasPrivateKey = process.env.GOOGLE_PRIVATE_KEY || process.env.GOOGLE_PRIVATE_KEY_BASE64;
    
    if (!process.env.GOOGLE_CLIENT_EMAIL || !hasPrivateKey || !process.env.GOOGLE_SHEET_ID) {
      console.log('❌ Missing environment variables');
      return res.status(500).json({ error: 'Server configuration error: missing environment variables' });
    }

    // Initialize Google Sheets API
    console.log('🔐 Initializing Google Auth...');
    
    // Try to parse and validate the private key
    let privateKey: string;
    
    if (process.env.GOOGLE_PRIVATE_KEY_BASE64) {
      // Decode from base64 (recommended method)
      console.log('🔑 Using base64-encoded private key');
      privateKey = Buffer.from(process.env.GOOGLE_PRIVATE_KEY_BASE64, 'base64').toString('utf-8');
    } else if (process.env.GOOGLE_PRIVATE_KEY) {
      // Try to handle escaped newlines
      console.log('🔑 Using GOOGLE_PRIVATE_KEY with newline replacement');
      privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
    } else {
      throw new Error('No private key found');
    }
    
    console.log('🔑 Private key format check:', {
      startsCorrectly: privateKey.startsWith('-----BEGIN PRIVATE KEY-----'),
      endsCorrectly: privateKey.includes('-----END PRIVATE KEY-----'),
      length: privateKey.length,
      hasRealNewlines: privateKey.includes('\n')
    });
    
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    console.log('✅ Google Auth initialized');

    console.log('📊 Creating Sheets API client...');
    const sheets = google.sheets({ version: 'v4', auth });
    console.log('✅ Sheets API client created');

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    console.log('📄 Spreadsheet ID:', spreadsheetId);

    const rowData = [
      new Date().toISOString(),
      name,
      asistencia,
      alergias || 'N/A',
      bus,
      canciones || 'N/A',
    ];
    console.log('📋 Row data to append:', rowData);

    // Append the data to the sheet
    console.log('📤 Appending data to sheet...');
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:F', // 6 columns: Timestamp, Name, Asistencia, Alergias, Bus, Canciones
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('✅ Data appended successfully!');
    console.log('Response:', JSON.stringify(response.data, null, 2));

    return res.status(200).json({
      success: true,
      message: 'Data submitted successfully',
      data: response.data,
    });
  } catch (error) {
    console.error('❌ ERROR submitting to Google Sheets:');
    console.error('Error type:', error?.constructor?.name);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Full error:', JSON.stringify(error, Object.getOwnPropertyNames(error), 2));
    
    if (error instanceof Error && 'code' in error) {
      console.error('Error code:', (error as any).code);
      console.error('Error status:', (error as any).status);
    }
    
    // Provide more helpful error messages
    let userMessage = 'Failed to submit data';
    if (error instanceof Error) {
      if (error.message.includes('Unable to detect')) {
        userMessage = 'Google authentication failed. Check private key format.';
      } else if (error.message.includes('Permission denied') || error.message.includes('403')) {
        userMessage = 'Sheet access denied. Share the sheet with the service account email.';
      } else if (error.message.includes('not found') || error.message.includes('404')) {
        userMessage = 'Sheet not found. Check GOOGLE_SHEET_ID.';
      } else if (error.message.includes('Unable to parse range')) {
        userMessage = 'Invalid sheet range. Check sheet name (should be Sheet1).';
      }
    }
    
    return res.status(500).json({
      error: userMessage,
      details: error instanceof Error ? error.message : 'Unknown error',
      type: error?.constructor?.name,
    });
  }
}
