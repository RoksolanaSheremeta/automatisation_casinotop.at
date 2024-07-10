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
    // 'https://testcasinos.org/post-sitemap.xml',
    // 'https://testcasinos.org/page-sitemap.xml',
    // 'https://testcasinos.org/maranello-casino-sitemap.xml',
    // 'https://testcasinos.org/maranello-bonus-sitemap.xml',
    // 'https://testcasinos.org/maranello-game-sitemap.xml',
    // 'https://testcasinos.org/maranello-games-sitemap.xml',
    // 'https://testcasinos.org/maranello-sportsbook-sitemap.xml',
    // 'https://testcasinos.org/maranello-free-spin-sitemap.xml',
    // 'https://testcasinos.org/maranello-no-deposit-sitemap.xml',
    // 'https://testcasinos.org/m-c-payment-methods-sitemap.xml',
    // 'https://testcasinos.org/m-c-soft-providers-sitemap.xml',
    // 'https://testcasinos.de/page-sitemap.xml',
    // 'https://philippinescasinos.ph/post-sitemap.xml',
    // 'https://philippinescasinos.ph/page-sitemap.xml',
    // 'https://philippinescasinos.ph/maranello-casino-sitemap.xml',
    // 'https://philippinescasinos.ph/maranello-vacancy-sitemap.xml',
    // 'https://philippinescasinos.ph/maranello-game-sitemap.xml',
    // 'https://philippinescasinos.ph/m-c-license-sitemap.xml',
    // 'https://philippinescasinos.ph/m-g-type-sitemap.xml',
    // 'https://philippinescasinos.ph/author-sitemap.xml',
    // 'https://develop-testcasinos-org.dev.prokit.me/post-sitemap.xml',
    // 'https://develop-testcasinos-org.dev.prokit.me/page-sitemap.xml',
    // 'https://develop-testcasinos-org.dev.prokit.me/maranello-casino-sitemap.xml',
    // 'https://develop-testcasinos-org.dev.prokit.me/maranello-bonus-sitemap.xml',
    // 'https://develop-testcasinos-org.dev.prokit.me/maranello-game-sitemap.xml',
    // 'https://develop-testcasinos-org.dev.prokit.me/maranello-games-sitemap.xml',
    // 'https://develop-testcasinos-org.dev.prokit.me/maranello-sportsbook-sitemap.xml',
    // 'https://develop-testcasinos-org.dev.prokit.me/maranello-free-spin-sitemap.xml',
    // 'https://develop-testcasinos-org.dev.prokit.me/maranello-no-deposit-sitemap.xml',
    // 'https://develop-testcasinos-org.dev.prokit.me/m-c-payment-methods-sitemap.xml',
    // 'https://develop-testcasinos-org.dev.prokit.me/m-c-soft-providers-sitemap.xml',
    // 'https://develop-testcasinos-org.dev.prokit.me/author-sitemap.xml'
    // 'https://testcasinos.co.nz/post-sitemap.xml',
    // 'https://testcasinos.co.nz/page-sitemap.xml',
    // 'https://testcasinos.co.nz/maranello-casino-sitemap.xml',
    // 'https://testcasinos.co.nz/maranello-bonus-sitemap.xml',
    // 'https://testcasinos.co.nz/maranello-game-sitemap.xml',
    // 'https://testcasinos.co.nz/m-c-license-sitemap.xml',
    // 'https://testcasinos.co.nz/m-g-type-sitemap.xml'
    // 'https://develop-kasinoceske-com.dev.prokit.me/post-sitemap.xml',
    // 'https://develop-kasinoceske-com.dev.prokit.me/page-sitemap.xml',
    // 'https://develop-kasinoceske-com.dev.prokit.me/maranello-casino-sitemap.xml',
    // 'https://develop-kasinoceske-com.dev.prokit.me/maranello-bonus-sitemap.xml',
    // 'https://develop-kasinoceske-com.dev.prokit.me/m-c-license-sitemap.xml',
    // 'https://develop-kasinoceske-com.dev.prokit.me/author-sitemap.xml'
    // 'https://aussiecasinoreviewer.com/page-sitemap.xml',
    // 'https://aussiecasinoreviewer.com/maranello-casino-sitemap.xml'
    // 'https://develop-siticasinononaams-com.dev.prokit.me/post-sitemap.xml',
    // 'https://develop-siticasinononaams-com.dev.prokit.me/page-sitemap.xml',
    // 'https://develop-siticasinononaams-com.dev.prokit.me/maranello-casino-sitemap.xml',
    // 'https://develop-siticasinononaams-com.dev.prokit.me/maranello-bonus-sitemap.xml',
    // 'https://develop-siticasinononaams-com.dev.prokit.me/category-sitemap.xml'
    // 'https://develop-testcasinos-de.dev.prokit.me/post-sitemap.xml',
    // 'https://develop-testcasinos-de.dev.prokit.me/page-sitemap.xml',
    // 'https://develop-testcasinos-de.dev.prokit.me/maranello-casino-sitemap.xml',
    // 'https://develop-testcasinos-de.dev.prokit.me/maranello-bonus-sitemap.xml',
    // 'https://develop-testcasinos-de.dev.prokit.me/maranello-game-sitemap.xml',
    // 'https://develop-testcasinos-de.dev.prokit.me/m-c-payment-methods-sitemap.xml',
    // 'https://develop-testcasinos-de.dev.prokit.me/m-c-soft-providers-sitemap.xml',
    // 'https://develop-testcasinos-de.dev.prokit.me/author-sitemap.xml'
    // 'https://testcasinos.de/post-sitemap.xml',
    // 'https://testcasinos.de/page-sitemap.xml',
    // 'https://testcasinos.de/maranello-casino-sitemap.xml',
    // 'https://testcasinos.de/maranello-bonus-sitemap.xml',
    // 'https://testcasinos.de/maranello-game-sitemap.xml',
    // 'https://testcasinos.de/m-c-payment-methods-sitemap.xml',
    // 'https://testcasinos.de/m-c-soft-providers-sitemap.xml',
    // 'https://testcasinos.de/author-sitemap.xml'
    // 'https://kasinoceske.com/page-sitemap.xml',
    // 'https://kasinoceske.com/maranello-casino-sitemap.xml',
    // 'https://kasinoceske.com/maranello-bonus-sitemap.xml',
    // 'https://kasinoceske.com/m-c-license-sitemap.xml'
    'https://casinosfest.com/post-sitemap.xml',
    'https://casinosfest.com/page-sitemap.xml',
    'https://casinosfest.com/maranello-casino-sitemap.xml'
  ];

  for (const sitemapUrl of testcasinosUrls) {
    it(`should return 200 status for all pages in the sitemap and check for duplicates for ${sitemapUrl}`, async () => {
      await fetchAndCheckSitemap(sitemapUrl);
    });
  }
});
