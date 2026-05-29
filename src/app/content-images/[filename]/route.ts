import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {NextResponse} from 'next/server';

const contentImageDir = path.join(process.cwd(), 'admin-content', 'images');

const contentTypes: Record<string, string> = {
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp'
};

export async function GET(
  _request: Request,
  {params}: {params: Promise<{filename: string}>}
) {
  const {filename} = await params;
  const safeName = path.basename(filename);
  const extension = path.extname(safeName).toLowerCase();

  if (!contentTypes[extension]) {
    return new NextResponse('Unsupported image type', {status: 415});
  }

  try {
    const image = await readFile(path.join(contentImageDir, safeName));

    return new NextResponse(image, {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Type': contentTypes[extension]
      }
    });
  } catch {
    return new NextResponse('Image not found', {status: 404});
  }
}
