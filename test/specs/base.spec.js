import FooterSection from '../pageobjects/footer.section.js';
import BaseSelectors from '../pageobjects/base.selectors.js';
import {
  checkImgAttributes,
  checkPageOpenedWithOkStatus
} from '../../models/base.methods.js';
import testData from '../../helpers/test-data.js';
import { getUrlsForSEOchecks } from '../../models/admin.methods.js';
import fetch from 'node-fetch';

describe('Base tests', () => {
  /* global baseUrl */

  beforeEach('Pre-conditions', async () => {
    await browser.url(baseUrl);
    if (await FooterSection.footer.isExisting() === false) {
      await browser.url(`https://${testData.promptCredentials[0]}:${testData.promptCredentials[1]}@${baseUrl.slice(8, -1)}`);
    }
  });

  it('Check that all pages are opened with the 200 status code', async () => {
    const pagesToCheck = await getUrlsForSEOchecks();
    for (let index = 0; index < pagesToCheck.length; index++) {
      await checkPageOpenedWithOkStatus(pagesToCheck[index]);
    }
  });

  it('Check that a page with random endpoint opens with the 404 status code', async () => {
    await browser.url(baseUrl + testData.invalidEndpoint);
    if (!BaseSelectors.imgWith404Error.isExisting()) {
      await expect(BaseSelectors.error404).toExist();
    }
  });

  it('Check the scroll to top button', async () => {
    await expect(BaseSelectors.scrollToTopButton).not.toBeDisplayed();
    await FooterSection.footer.scrollIntoView();
    await BaseSelectors.scrollToTopButton.click();
    await expect(BaseSelectors.scrollToTopButton).not.toBeDisplayed();
    await expect(FooterSection.footer).not.toBeDisplayedInViewport();
  });

  it('Check internal redirects without tralling slash for pages', async () => {
    const pagesToCheck = await getUrlsForSEOchecks();
    for (let index = 0; index < pagesToCheck.length; index++) {
      await browser.url(pagesToCheck[index]);
      await expect(browser).toHaveUrlContaining(`${pagesToCheck[index]}`);
      await checkPageOpenedWithOkStatus(pagesToCheck[index]);
    }
  });

  it('Check internal http redirect', async () => {
    const urlWithoutS = baseUrl.slice(0, 4) + baseUrl.slice(5);
    await browser.url(urlWithoutS);
    await expect(browser).toHaveUrl(baseUrl);
    await checkPageOpenedWithOkStatus(baseUrl);
  });

  it('Check that url changes from www to withot www', async () => {
    if (baseUrl !== 'https://qa.casino-kit-prod.site/') {
      const wwwLink = [baseUrl.slice(0, 8), 'www.', baseUrl.slice(8)].join('');
      await browser.reloadSession();
      await browser.url(wwwLink);
      await checkPageOpenedWithOkStatus(baseUrl);
      await expect(browser).toHaveUrl(baseUrl);
    }
  });

  // TODO: find a solution to make this test easier, it's too much heavy for CI?
  it.skip('Check images attributes on different pages', async () => {
    const arrayWithBrokenImages = [];
    const pagesToCheck = await getUrlsForSEOchecks();
    for (let index = 0; index < pagesToCheck.length; index++) {
      await browser.url(pagesToCheck[index]);
      const allImages = await BaseSelectors.allImages;
      for (let index = 0; index < allImages.length; index++) {
        await checkImgAttributes(allImages[index]);
        const srcAttr = await allImages[index].getAttribute(testData.attributes.src);
        const height = await allImages[index].getSize(testData.imageParams.height);
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

  it('Check robots.txt response', async () => {
    const invalidUrls = ['https://qa.casino-kit-prod.site/','https://casino-kit-prod.site/'];
    if (!invalidUrls.includes(baseUrl)) {
      await browser.url(`${baseUrl}robots.txt`);
      const response = await fetch(`${baseUrl}robots.txt`);
      expect(response.status).toBe(200);
      const headers = response.headers;
      expect(headers.get('x-robots-tag')).not.toBe('noindex , nofollow');
      expect(await $('body').getText()).not.toContain('noindex , nofollow');
    }
  });
});
