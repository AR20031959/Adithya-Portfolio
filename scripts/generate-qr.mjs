import QRCode from 'qrcode';
import { mkdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

// 1. Check CLI argument first
let url = process.argv[2] || process.env.NEXT_PUBLIC_SITE_URL;

// 2. If not provided via CLI or process.env, look in .env.local and .env
if (!url) {
  const envCandidates = ['.env.local', '.env'];
  for (const file of envCandidates) {
    const fullPath = path.resolve(process.cwd(), file);
    if (existsSync(fullPath)) {
      try {
        const content = await readFile(fullPath, 'utf8');
        const match = content.match(/^\s*NEXT_PUBLIC_SITE_URL\s*=\s*(["']?)(.*?)\1\s*$/m);
        if (match && match[2]?.trim()) {
          url = match[2].trim();
          break;
        }
      } catch {
        // Continue to check other candidates
      }
    }
  }
}

// 3. Validate URL format and prevent placeholder or local development URLs
const isPlaceholder = (val) =>
  !val ||
  val.includes('localhost') ||
  val.includes('127.0.0.1') ||
  val.includes('YOUR_') ||
  val.includes('your-real-portfolio-url') ||
  val.includes('.example');

if (!url || !/^https:\/\//i.test(url) || isPlaceholder(url)) {
  console.error('\n[QR Generation Error] A verified, public production HTTPS URL is required.');
  console.error('Do not use localhost, placeholder, or unverified URLs for a resume-printed QR code.\n');
  console.error('Options:');
  console.error('  1. Pass the deployed URL explicitly:');
  console.error('     npm run qr -- https://your-portfolio-slug.vercel.app\n');
  console.error('  2. Configure NEXT_PUBLIC_SITE_URL in .env.local with your real production https:// URL:\n');
  process.exit(1);
}

try {
  await mkdir('public', { recursive: true });
  const targetPath = 'public/portfolio-qr.png';

  // 1200px width with High error correction ('H') for crisp, high-density print rendering
  await QRCode.toFile(targetPath, url, {
    errorCorrectionLevel: 'H',
    width: 1200,
    margin: 3,
    color: {
      dark: '#030303',
      light: '#ffffff'
    }
  });

  console.log(`\n✓ High-resolution resume QR successfully generated at ${targetPath}`);
  console.log(`  Target URL: ${url}`);
  console.log('  Settings: Error correction level H, 1200px, monochrome.\n');
} catch (error) {
  console.error('Failed to generate QR code:', error);
  process.exit(1);
}
