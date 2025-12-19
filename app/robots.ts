import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/api/'], // Blokuj sekcje admina
        },
        sitemap: 'https://gdyniapadelclub.pl/sitemap.xml',
    };
}