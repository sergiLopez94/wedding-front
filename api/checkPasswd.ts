import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createHash, timingSafeEqual } from 'crypto';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { password } = req.body;
    
    // Validate input
    if (!password || typeof password !== 'string') {
      return res.status(400).json({ error: 'Invalid request' });
    }
    
    // Check environment variable exists
    if (!process.env.FRONTEND_PASSWORD_HASH) {
      console.error('❌ FRONTEND_PASSWORD_HASH not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }
    
    // Hash the provided password using SHA-256
    const hashedPassword = createHash('sha256').update(password).digest('hex');
    const storedHash = process.env.FRONTEND_PASSWORD_HASH;
    
    // Use timing-safe comparison to prevent timing attacks
    const match = timingSafeEqual(
      Buffer.from(hashedPassword),
      Buffer.from(storedHash)
    );
    
    if (match) {
      return res.status(200).json({ valid: true });
    } else {
      // Add small delay to slow down brute force attempts
      await new Promise(resolve => setTimeout(resolve, 1000));
      return res.status(401).json({ valid: false });
    }
  } catch (err) {
    console.error('Error checking password:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}