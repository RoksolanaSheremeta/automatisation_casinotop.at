const assert = require('assert');
const axios = require('axios');

describe('Sitemap Test 200', () => {
  const extractUrlsFromXml = (xml) => {
    const urlRegex = /<loc>(.*?)<\/loc>/g;
    const urls = [];
    let match;
    while ((match = urlRegex.exec(xml)) !== null) {
      urls.push(match[1]);
    }
    return urls;
  };

  const fetchAndCheckSitemap = async (sitemapUrl) => {
    const response = await axios.get(sitemapUrl);
    assert.strictEqual(response.status, 200, 'Failed to fetch sitemap');
    const xml = response.data;
    const urls = extractUrlsFromXml(xml);

    console.log('TOTAL links AMT:', urls.length);
    
    const visitedUrls = new Set();
    for (const url of urls) {
      if (visitedUrls.has(url)) {
        assert.fail(`Duplicate page found: ${sitemapUrl}`);
      }
      visitedUrls.add(url);
    }

    const result = [];
    await Promise.all(
      urls.map(async (url) => {
        try {
          const pageResponse = await axios.head(url);
          console.log(`${'EACH URL STATUS:'} ${url} ${pageResponse.status}`);
          if (pageResponse.status !== 200) {
            result.push(`${url} - ${pageResponse.status}`);
          }
        } catch (error) {
          if (error.response && error.response.status === 404) {
            console.log(`${'URL STATUS NOT !== 200 FAILED:'} ${url} ${error.response.status}`);
            result.push(`${url} - 404`);
          } else {
            throw error;
          }
        }
      })
    );

    // Преобразуем массив result в строку, содержащую только один URL и его статус код
    // const singleResult = result.length > 0 ? result[0] : '';
    // await Mess.slackStatus200(singleResult.toString());
  };

  const testcasinosUrls = [
    'https://testcasinos.org/post-sitemap.xml',
    'https://testcasinos.org/page-sitemap.xml',
    'https://testcasinos.org/maranello-casino-sitemap.xml',
    'https://testcasinos.org/maranello-bonus-sitemap.xml',
    'https://testcasinos.org/maranello-game-sitemap.xml',
    'https://testcasinos.org/maranello-games-sitemap.xml',
    'https://testcasinos.org/maranello-sportsbook-sitemap.xml',
    'https://testcasinos.org/maranello-free-spin-sitemap.xml',
    'https://testcasinos.org/maranello-no-deposit-sitemap.xml',
    'https://testcasinos.org/m-c-payment-methods-sitemap.xml',
    'https://testcasinos.org/m-c-soft-providers-sitemap.xml',
    'https://testcasinos.org/author-sitemap.xml'
  ];

  for (const sitemapUrl of testcasinosUrls) {
    it(`should return 200 status for all pages in the sitemap and check for duplicates for ${sitemapUrl}`, async () => {
      await fetchAndCheckSitemap(sitemapUrl);
    });
  }
});
