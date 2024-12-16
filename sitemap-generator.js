import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';

async function generateSitemap() {
    try {
        const smStream = new SitemapStream({
            hostname: 'https://your-domain.com/'
        });

        const routes = [
            { url: '/', priority: 1.0, changefreq: 'daily' },
            { url: '/#about', priority: 0.6, changefreq: 'weekly' },
            { url: '/#work', priority: 0.7, changefreq: 'weekly' },
            { url: '/#projects', priority: 0.8, changefreq: 'weekly' },
            { url: '/#contact', priority: 0.5, changefreq: 'monthly' }
        ];

        routes.forEach(route => smStream.write(route));

        smStream.end();

        const sitemap = await streamToPromise(smStream);

        // Ensure build directory exists
        const buildDir = path.resolve('./build');
        if (!fs.existsSync(buildDir)) {
            fs.mkdirSync(buildDir, { recursive: true });
        }

        const sitemapPath = path.resolve('./build/sitemap.xml');
        fs.writeFileSync(sitemapPath, sitemap.toString());

        console.log('Sitemap generated successfully at:', sitemapPath);
    } catch (error) {
        console.error('Error generating sitemap:', error);
        process.exit(1);
    }
}

// Run the sitemap generation
generateSitemap();