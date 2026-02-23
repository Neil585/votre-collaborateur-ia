import sharp from 'sharp';
import fs from 'fs';

// Convert user's image to favicon formats
async function convertUserFavicon() {
  try {
    // Read the user's image
    const imageBuffer = fs.readFileSync('./public/favicon-test.jpg');
    
    // Generate SVG version (convert to PNG base64 embedded in SVG)
    const png32Buffer = await sharp(imageBuffer)
      .resize(32, 32)
      .png({ quality: 100 })
      .toBuffer();
    
    const base64Png = png32Buffer.toString('base64');
    const svgContent = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <image href="data:image/png;base64,${base64Png}" width="32" height="32"/>
</svg>`;
    
    fs.writeFileSync('./public/favicon.svg', svgContent);
    
    // Generate 32x32 PNG
    await sharp(imageBuffer)
      .resize(32, 32)
      .png({ quality: 100 })
      .toFile('./public/favicon-32.png');
    
    // Generate 16x16 PNG
    await sharp(imageBuffer)
      .resize(16, 16)
      .png({ quality: 100 })
      .toFile('./public/favicon-16.png');
    
    // Generate 192x192 PNG
    await sharp(imageBuffer)
      .resize(192, 192)
      .png({ quality: 90 })
      .toFile('./public/favicon-192.png');
    
    // Generate 512x512 PNG
    await sharp(imageBuffer)
      .resize(512, 512)
      .png({ quality: 90 })
      .toFile('./public/favicon-512.png');
    
    console.log('✅ Your favicon-test.jpg converted to all favicon formats!');
    
  } catch (error) {
    console.error('❌ Error converting favicon:', error);
  }
}

convertUserFavicon();
