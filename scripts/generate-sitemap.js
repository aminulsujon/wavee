const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

// Example static URLs - you can fetch dynamic URLs from your CMS or DB
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/products', changefreq: 'monthly', priority: 0.7 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/lenze-i510', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'yearly', priority: 0.8 },
  
  // Add more dynamic routes here
];

async function generateSitemap() {
  const stream = new SitemapStream({ hostname: 'https://www.waveengineeringbd.com/' });
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  const filePath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(filePath, xml);

  console.log('✅ Sitemap generated at public/sitemap.xml');
}

generateSitemap();
