import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The old Creative Design page is covered by Design Lab now.
    return [{ source: "/creative-design", destination: "/digital-labs", permanent: true }];
  },
};

export default nextConfig;
