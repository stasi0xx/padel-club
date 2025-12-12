import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'twoj-projekt.supabase.co', // Zmień na swój hostname Supabase
            },
        ],
    },
};

export default nextConfig;
