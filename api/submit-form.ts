import type { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, asistencia, alergias, bus, canciones } = req.body;

    // Validate required fields
    if (!name || !asistencia || !bus) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Append the data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:E', // Adjust this range based on your sheet structure
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toISOString(), // Timestamp
            name,
            asistencia,
            alergias || 'N/A',
            bus,
            canciones || 'N/A',
          ],
        ],
      },
    });

    return res.status(200).json({
      success: true,
      message: 'Data submitted successfully',
      data: response.data,
    });
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return res.status(500).json({
      error: 'Failed to submit data',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
