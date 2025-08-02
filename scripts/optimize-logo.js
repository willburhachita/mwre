import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = join(__dirname, '../public/images/logo.png');
const outputPath = join(__dirname, '../public/images/logo.optimized.png');

sharp(inputPath)
  .resize(200, 200, { // Adjust size as needed while maintaining aspect ratio
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  })
  .png({
    quality: 80,
    compressionLevel: 9,
    palette: true
  })
  .toFile(outputPath)
  .then(info => {
    console.log('Logo optimized successfully:', info);
  })
  .catch(err => {
    console.error('Error optimizing logo:', err);
  });