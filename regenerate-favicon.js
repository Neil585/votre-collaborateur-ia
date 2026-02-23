import sharp from 'sharp';
import fs from 'fs';

// Generate different sizes for favicon
async function regenerateFavicons() {
  try {
    // Read the updated SVG
    const svgBuffer = fs.readFileSync('./public/favicon.svg');
    
    // Generate 32x32 favicon.ico equivalent (PNG for better quality)
    await sharp(svgBuffer)
      .resize(32, 32)
      .png({ quality: 100 })
      .toFile('./public/favicon-32.png');
    
    // Generate 16x16 for older browsers
    await sharp(svgBuffer)
      .resize(16, 16)
      .png({ quality: 100 })
      .toFile('./public/favicon-16.png');
    
    // Generate 192x192 for Android/Chrome
    await sharp(svgBuffer)
      .resize(192, 192)
      .png({ quality: 90 })
      .toFile('./public/favicon-192.png');
    
    // Generate 512x512 for Apple/Android
    await sharp(svgBuffer)
      .resize(512, 512)
      .png({ quality: 90 })
      .toFile('./public/favicon-512.png');
    
    console.log('✅ New AI LIBERTY favicons generated successfully!');
    
  } catch (error) {
    console.error('❌ Error generating favicons:', error);
  }
}

regenerateFavicons();
