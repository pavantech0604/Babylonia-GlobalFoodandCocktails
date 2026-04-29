import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  let base64Image = '';
  
  try {
    const logoPath = path.join(process.cwd(), 'public', 'assets', 'logo.png');
    const imageBuffer = fs.readFileSync(logoPath);
    base64Image = `data:image/png;base64,${imageBuffer.toString('base64')}`;
  } catch (error) {
    // fallback
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          overflow: 'hidden',
          background: 'transparent',
        }}
      >
        {base64Image ? (
          <img
            src={base64Image}
            alt="Logo Icon"
            style={{
              width: '52px',
              height: 'auto',
              marginTop: '-4px',
            }}
          />
        ) : (
          <div style={{ color: '#884d27', fontSize: 20 }}>B</div>
        )}
      </div>
    ),
    {
      ...size,
    }
  );
}
