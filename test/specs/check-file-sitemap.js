const assert = require('assert');
const axios = require('axios');
const { parseString } = require('xml2js');

describe('Sitemap Test', () => {
  // it('should return 200 status for all pages in the sitemap', async () => {
  //   const sitemapUrl = 'https://develop-testcasinos-com.dev.prokit.me/at/post-sitemap.xml';

  //   // Отримуємо вміст sitemap.xml
  //   const response = await axios.get(sitemapUrl);
  //   assert.strictEqual(response.status, 200, 'Failed to fetch sitemap');

  //   // Розбираємо xml
  //   const xml = response.data;
  //   let urls = [];
  //   parseString(xml, (err, result) => {
  //     if (err) 
  //       throw err;
  //     urls = result.urlset.url.map((url) => url.loc[0]);
  //   });

  //   // Перевіряємо статус для кожної сторінки
  //   await Promise.all(
  //     urls.map(async (url) => {
  //       const pageResponse = await axios.head(url);
  //       assert.strictEqual(
  //         pageResponse.status,
  //         200,
  //         `Failed for page ${url} with status ${pageResponse.status}`
  //       );
  //     })
  //   );
  // });

  it('should return 200 status for all pages in the sitemap and check for duplicates', async () => {
    const sitemapUrl = 'https://testcasinos.com/maranello-bonus-sitemap.xml';

    // Отримуємо вміст sitemap.xml
    const response = await axios.get(sitemapUrl);
    assert.strictEqual(response.status, 200, 'Failed to fetch sitemap');

    // Розбираємо xml
    const xml = response.data;
    let urls = [];
    // eslint-disable-next-line prefer-const
    let visitedUrls = new Set(); // Зберігатиме відвідані URL-адреси

    parseString(xml, (err, result) => {
      if (err) 
        throw err;
      urls = result.urlset.url.map((url) => url.loc[0]);
    });

    // Перевіряємо статус для кожної сторінки
    await Promise.all(
      urls.map(async (url) => {
        if (visitedUrls.has(url)) {
          assert.fail(`Duplicate page found: ${url}`);
        }
        visitedUrls.add(url);

        const pageResponse = await axios.head(url);
        assert.strictEqual(
          pageResponse.status,
          200,
          `Failed for page ${url} with status ${pageResponse.status}`
        );
      })
    );
  });
});