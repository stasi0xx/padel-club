import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'qeefauvonjmxvixowdvc.supabase.co', // Zmień na swój hostname Supabase
            },
        ],
    },
};

export default nextConfig;
