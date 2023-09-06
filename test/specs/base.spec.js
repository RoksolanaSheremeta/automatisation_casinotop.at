import Base from '../pageobjects/base.selectors.js';
import fetch from 'node-fetch';
import { checkImgAttributes, } from '../models/base.methods.js';
import testData from '../helpers/test-data.js';
import { getUrlsForSEOchecks } from '../models/admin.methods.js';


describe('Base tests', () => {
  /* global baseUrl */

  beforeEach('Pre-conditions', () => {
    browser.url(baseUrl);
  });

  it('Check that all pages are opened with the 200 status code', async () => {
    const pagesToCheck = await getUrlsForSEOchecks();
    for (let index = 0; index < pagesToCheck.length; index++) {
      const siteLink = await fetch(pagesToCheck[index]);
      expect(siteLink.status).toBe(200);
    }
  });

  it('Check that a page with random endpoint opens with the 400 status code', async () => {
    const siteLink = await fetch(baseUrl + testData.invalidEndpoint);
    expect(siteLink.status).toBe(404);
  });

  it('Check internal redirects without tralling slash for pages', async () => {
    const pagesToCheck = await getUrlsForSEOchecks();
    for (let index = 0; index < pagesToCheck.length; index++) {
      await browser.url(pagesToCheck[index]);
      await expect(browser).toHaveUrl(`${pagesToCheck[index]}/`);
      const siteLink = await fetch(pagesToCheck[index]);
      expect(siteLink.status).toBe(200);  
    }
  });

  it('Check internal http redirect', async () => {
    if (baseUrl !== 'https://casinotop.co.nz/') {
      await browser.url(baseUrl);
      const httpsLink = [baseUrl.slice(0, 4), 's', baseUrl.slice(4)].join('');
      await expect(browser).toHaveUrl(httpsLink);
      const siteLink = await fetch(httpsLink);
      expect(siteLink.status).toBe(200);  
    }
  });

  it('Check that url changes from www to withot www', async () => {
    if (baseUrl !== 'https://casinotop.co.nz/') {
      const wwwLink = [baseUrl.slice(0, 7), 'www.', baseUrl.slice(7)].join('');
      const linkAfterRedirect = [baseUrl.slice(0, 4), 's', baseUrl.slice(4)].join('');
      await browser.reloadSession();
      await browser.url(wwwLink);
      await expect(browser).toHaveUrl(linkAfterRedirect);
      const siteLink = await fetch(linkAfterRedirect);
      expect(siteLink.status).toBe(200);
    }
  });

  // TODO: find a solution to make this test easier, it's too much heavy for CI?
  it.skip('Check images attributes on different pages', async () => {
    const arrayWithBrokenImages = [];
    const pagesToCheck = await getUrlsForSEOchecks();
    for (let index = 0; index < pagesToCheck.length; index++) {
      await browser.url(pagesToCheck[index]);
      const allImages = await Base.allImages;
      for (let index = 0; index < allImages.length; index++) {
        await checkImgAttributes(allImages[index]);
        const srcAttr = await allImages[index].getAttribute('src');
        const height = await allImages[index].getSize('height');
        if (height === 0) {
          arrayWithBrokenImages.push(`Image ${srcAttr} height is 0 on page ${await browser.getUrl()}`);
        } else {
          expect(height).toBeGreaterThan(0);
        }
      }
    }
    console.log(arrayWithBrokenImages);
    expect(arrayWithBrokenImages.length).toBe(0);
  });
});
