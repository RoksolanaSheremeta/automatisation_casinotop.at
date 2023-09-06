import testData from '../helpers/test-data';
import { getUrlsForSEOchecks } from '../models/admin.methods';
import { checkAttributeText } from '../models/base.methods';
import SEOTags from '../pageobjects/SEO.tags';
import fetch from 'node-fetch';

describe('SEO data checks', () => {
  /* global baseUrl */

  it('Make sure that h1-h6 tags are present and contain text on all pages', async () => {
    const pagesToCheckArray = await getUrlsForSEOchecks();
    for (let index = 0; index < pagesToCheckArray.length; index++) {
      await browser.url(pagesToCheckArray[index]);  
      await checkAttributeText(SEOTags.h1Tag);
      await checkAttributeText(SEOTags.h2Tag);
      await checkAttributeText(SEOTags.h3Tag);
      await checkAttributeText(SEOTags.h4Tag);
      await checkAttributeText(SEOTags.h5Tag);
      await checkAttributeText(SEOTags.h6Tag);
    }
  });

  it('Check description on all pages', async () => {
    const pagesToCheckArray = await getUrlsForSEOchecks();
    for (let index = 0; index < pagesToCheckArray.length; index++) {
      await browser.url(pagesToCheckArray[index]);  
      await expect(SEOTags.description).toExist();
      const contentAttr = await SEOTags.description.getAttribute('content');
      await expect(contentAttr).not.toBe(null || '');
    }
  });

  it('Check canonical on all pages', async () => {
    const pagesToCheckArray = await getUrlsForSEOchecks();
    for (let index = 0; index < pagesToCheckArray.length; index++) {
      await browser.url(pagesToCheckArray[index]);  
      await expect(SEOTags.canonical).toExist();
      const hrefAttr = await SEOTags.canonical.getAttribute('href');
      if (hrefAttr !== 'https://casinotop.co.nz/') {
        await expect(hrefAttr).toEqual(`${pagesToCheckArray[index]}/`);
      }
    }
  });

  it('Check SEO attributes on an invalid page (doesn`t contain h2-h6 tags and canonical but contain h1)', async () => {
    await browser.url(baseUrl + testData.invalidEndpoint);
    await checkAttributeText(SEOTags.h1Tag);
    const tags = [SEOTags.h2Tag, SEOTags.h3Tag, SEOTags.h4Tag, SEOTags.h5Tag, SEOTags.h6Tag];
    for (let index = 0; index < tags.length; index++) {
      await expect(tags[index]).not.toBeExisting();
      await expect(SEOTags.description).not.toBeExisting();
      await expect(SEOTags.canonical).not.toBeExisting();
    }
  });

  it('Check canonical on the second Blog page', async () => {
    const siteLink = await fetch(baseUrl + testData.secondBlogPage);
    if (siteLink.status === 200) {    
      await browser.url(baseUrl + testData.secondBlogPage);
      await expect(SEOTags.canonical).toBeExisting();
      const hrefAttr = await SEOTags.canonical.getAttribute('href');
      await expect(hrefAttr).toEqual(baseUrl + testData.blogPage);  
    } else {
      console.log('The website has no Blog page');
    }
  });
});
