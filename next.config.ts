import type { NextConfig } from "next";

// حالت «standalone» برای استقرار سرور؛ حالت «export» برای ساخت نسخه موبایل (Capacitor):
//   NEXT_OUTPUT=export npx next build  →  خروجی استاتیک در پوشه out/
const isExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  output: isExport ? "export" : "standalone",
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
