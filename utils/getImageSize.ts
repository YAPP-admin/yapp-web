import fs from 'fs';

const PUBLIC_PATH = `${process.cwd()}/public`;

export interface ImageSize {
  width: number;
  height: number;
}

// PNG, JPEG, WebP 헤더에서 이미지 크기를 읽습니다. 읽을 수 없으면 null
export function getImageSize(src: string): ImageSize | null {
  const path = `${PUBLIC_PATH}${src}`;
  if (!fs.existsSync(path)) return null;

  const buf = fs.readFileSync(path);

  // PNG: IHDR 청크
  if (buf.toString('ascii', 1, 4) === 'PNG') {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  // WebP: VP8 / VP8L / VP8X 청크
  if (
    buf.toString('ascii', 0, 4) === 'RIFF' &&
    buf.toString('ascii', 8, 12) === 'WEBP'
  ) {
    const chunk = buf.toString('ascii', 12, 16);
    if (chunk === 'VP8 ') {
      return {
        width: buf.readUInt16LE(26) & 0x3fff,
        height: buf.readUInt16LE(28) & 0x3fff,
      };
    }
    if (chunk === 'VP8L') {
      const bits = buf.readUInt32LE(21);
      return {
        width: (bits & 0x3fff) + 1,
        height: ((bits >> 14) & 0x3fff) + 1,
      };
    }
    if (chunk === 'VP8X') {
      return {
        width: buf.readUIntLE(24, 3) + 1,
        height: buf.readUIntLE(27, 3) + 1,
      };
    }
    return null;
  }

  // JPEG: SOF 마커
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let offset = 2;
    while (offset + 9 < buf.length) {
      if (buf[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      const marker = buf[offset + 1];
      // 패딩(0xFF) 또는 길이 없는 마커(RST, SOI, EOI)
      if (marker === 0xff) {
        offset += 1;
        continue;
      }
      if (marker >= 0xd0 && marker <= 0xd9) {
        offset += 2;
        continue;
      }
      const isSOF =
        marker >= 0xc0 &&
        marker <= 0xcf &&
        marker !== 0xc4 &&
        marker !== 0xc8 &&
        marker !== 0xcc;
      if (isSOF) {
        return {
          height: buf.readUInt16BE(offset + 5),
          width: buf.readUInt16BE(offset + 7),
        };
      }
      offset += 2 + buf.readUInt16BE(offset + 2);
    }
  }

  return null;
}
