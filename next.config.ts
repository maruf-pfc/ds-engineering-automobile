import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "garirbazar.s3.amazonaws.com",
      "media.drive.com.au",
      "www.thedrive.com",
      "www.shutterstock.com",
    ],
  },
};

export default nextConfig;
