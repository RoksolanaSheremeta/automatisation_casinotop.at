import testData from '../helpers/test-data';
import { getUrlsForSEOchecks } from '../models/admin.methods';
import { checkAttributeText } from '../models/base.methods';
import SEOTags from '../pageobjects/SEO.tags';
import BaseSelectors from '../pageobjects/base.selectors';

describe('SEO data checks', () => {
  /* global baseUrl */
  let pagesToCheckArray;

  before('Pre-conditions for getting pages for checking', async() => {
    pagesToCheckArray = await getUrlsForSEOchecks();
  });

  beforeEach('Pre-conditions', async () => {
    await browser.url(baseUrl);
  });

  it('Make sure that h1-h6 tags are present and contain text on all pages', async () => {
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
    const urlsWithNoDescription = [];
    const urlsWithNoContent = [];
    for (let index = 0; index < pagesToCheckArray.length; index++) {
      await browser.url(pagesToCheckArray[index]);  
      if (await SEOTags.description.isExisting() === false) {
        urlsWithNoDescription.push(pagesToCheckArray[index]);
      } else {
        await expect(SEOTags.description).toExist();
        if (await SEOTags.description.getAttribute(testData.attributes.content) === null ||
        await SEOTags.description.getAttribute(testData.attributes.content) === '') {
          urlsWithNoContent.push(pagesToCheckArray[index]);
        }
      }
      console.log(`There are urls without description: ${urlsWithNoDescription}`);
      console.log(`There are decsriptions without content: ${urlsWithNoContent}`);
    }
  });

  it('Check canonical on all pages', async () => {
    const urlsWithNoCanonical = [];
    for (let index = 0; index < pagesToCheckArray.length; index++) {
      await browser.url(pagesToCheckArray[index]);  
      if (await SEOTags.canonical.isExisting() === false) {
        urlsWithNoCanonical.push(pagesToCheckArray[index]);
      } else {
        await expect(SEOTags.canonical).toExist();
        const hrefAttr = await SEOTags.canonical.getAttribute(testData.attributes.href);
        if (hrefAttr !== 'https://qa.casino-kit-prod.site/' || 
        hrefAttr !== 'https://casino-kit-prod.site/') {
          await expect(hrefAttr).toContain(`${pagesToCheckArray[index]}`);
        }  
      }
    }
    console.log(`There are urls without canonical: ${urlsWithNoCanonical}`);
  });

  it('Check SEO attributes on an invalid page (doesn`t contain h2-h6 tags and canonical but contain h1)', async () => {
    await browser.url(baseUrl + testData.endpoints.invalidEndpoint);
    await checkAttributeText(SEOTags.h1Tag);
    await expect(SEOTags.h2Tag).not.toBeExisting();
    await expect(SEOTags.h3Tag).not.toBeExisting();
    await expect(SEOTags.h4Tag).not.toBeExisting();
    await expect(SEOTags.h5Tag).not.toBeExisting();
    await expect(SEOTags.h6Tag).not.toBeExisting();

    await expect(SEOTags.description).not.toBeExisting();
    await expect(SEOTags.canonical).not.toBeExisting();
  });

  it('Check all attributes on the Blog page', async () => {
    const siteLink = await fetch(baseUrl + testData.blogPage);
    if (siteLink.status === 200) {    
      await browser.url(baseUrl + testData.blogPage); 
      await expect(SEOTags.canonical).toBeExisting();
      const hrefAttr = await SEOTags.canonical.getAttribute(testData.attributes.href);
      await expect(hrefAttr).toEqual(baseUrl + testData.blogPage);
      await checkAttributeText(SEOTags.h1Tag);
      await checkAttributeText(SEOTags.h2Tag);
      await checkAttributeText(SEOTags.h3Tag);
      await checkAttributeText(SEOTags.h4Tag);
      await checkAttributeText(SEOTags.h5Tag);
      await checkAttributeText(SEOTags.h6Tag);
      await expect(SEOTags.description).toExist();
    } else {
      console.log('The website has no Blog page');
    }
  });


  it('Check canonical on the second Blog page', async () => {
    await browser.url(baseUrl + testData.secondBlogPage);
    if (!BaseSelectors.error404.isExisting()) {    
      await browser.url(baseUrl + testData.secondBlogPage);
      await expect(SEOTags.canonical).toBeExisting();
      const hrefAttr = await SEOTags.canonical.getAttribute(testData.attributes.href);
      await expect(hrefAttr).toEqual(baseUrl + testData.blogPage);  
    } else {
      console.log('The website has no Blog page');
    }
  });
});
