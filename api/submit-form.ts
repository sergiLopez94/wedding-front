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
    console.log('  GOOGLE_SHEET_ID:', process.env.GOOGLE_SHEET_ID ? '✅ Set' : '❌ Missing');

    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
      console.log('❌ Missing environment variables');
      return res.status(500).json({ error: 'Server configuration error: missing environment variables' });
    }

    // Initialize Google Sheets API
    console.log('🔐 Initializing Google Auth...');
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
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
    console.error('Full error:', error);
    
    if (error instanceof Error && 'code' in error) {
      console.error('Error code:', (error as any).code);
    }
    
    return res.status(500).json({
      error: 'Failed to submit data',
      details: error instanceof Error ? error.message : 'Unknown error',
      type: error?.constructor?.name,
    });
  }
}
