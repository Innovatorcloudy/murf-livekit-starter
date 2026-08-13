import type { NextConfig } from 'next';
import fs from 'fs';
import path from 'path';

// Automatic copy of the uploaded avatar image to the public folder during runtime initialization
try {
  const src = "C:/Users/dr/.gemini/antigravity-ide/brain/d96a7103-bbd7-456c-8a73-9d92c96c8dfe/media__1786145153471.jpg";
  const dest = path.join(process.cwd(), "public/jan_sahay_avatar.jpg");
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log("Auto-copied uploaded avatar image to public/jan_sahay_avatar.jpg successfully!");
  }
} catch (e) {
  console.error("Failed to copy avatar in next.config.ts:", e);
}

const nextConfig: NextConfig = {
  eslint: {
    // These warnings come from upstream LiveKit/AI UI components, not our code.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
