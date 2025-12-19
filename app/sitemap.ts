import { MetadataRoute } from 'next';
import { offersData } from '@/data/offers'; // Zakładam, że tu masz dane

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://gdyniapadelclub.pl';

    // Statyczne podstrony
    const routes = [
        '',
        '/jak-zaczac',
        '/aktualnosci',
        '/regulamin',
        '/polityka-prywatnosci',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamiczne podstrony ofert
    const offerRoutes = offersData.map((offer) => ({
        url: `${baseUrl}/oferta/${offer.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...offerRoutes];
}