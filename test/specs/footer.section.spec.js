import testData from '../helpers/test-data.js';
import { waitForElement } from '../models/base.methods.js';
import FooterSection from '../pageobjects/footer.section.js';
/* global baseUrl */


describe('Footer tests', () => {
  beforeEach('Pre-conditions', async () => {
    // eslint-disable-next-line no-undef
    await browser.url(baseUrl);
    if (await FooterSection.footer.isExisting() === false) {
      await browser.url(`https://${testData.promptCredentials[0]}:${testData.promptCredentials[1]}@${baseUrl.slice(8, -1)}`);
    }
  });

  it('Check that the footer is present and displayed on the page', async () => {
    await expect(FooterSection.footer).toBeDisplayed();
  });

  it('Make sure that blocks with menus are present and have titles', async () => {
    await expect(FooterSection.menuSections).toBeExisting();
    await FooterSection.menuSections[0].scrollIntoView();
    // eslint-disable-next-line no-undef
    if (baseUrl.includes('casinoofthekings.ca')) {
      console.log('This domain has no block titles in footer');
    } else {
      if (await FooterSection.sectionsTitles.length !== 0 ||
      await FooterSection.sectionsTitles.length !== undefined) {
        await expect(FooterSection.sectionsTitles).toBeDisplayed();
      }
    }
    await expect(FooterSection.menuItems).toHaveAttribute(testData.attributes.href);
  });

  it('Make sure that copyright data is displayed in footer', async () => {
    let copyrightElem;
    await expect(FooterSection.footer).toBeDisplayed();
    await FooterSection.footer.scrollIntoView({block: 'center'});
    if (await FooterSection.copyrightText[1].isExisting === true) {
      copyrightElem = await FooterSection.copyrightText[1];
      await browser.fullscreenWindow();
      await expect(copyrightElem).toBeDisplayed();
      await expect(copyrightElem).toHaveTextContaining(testData.copyrightText + new Date().getFullYear());  
    }
  });

  it('Make sure that all images in the footer are displayed', async () => {
    await waitForElement(FooterSection.footer);
    await FooterSection.footer.scrollIntoView({block: 'center'});
    if (await FooterSection.icons.length < 1) {
      console.log('There are no images in footer');
    } else {
      await expect(FooterSection.icons).toBeExisting();

      for (let i = 0; i < await FooterSection.icons.length; i++) {
        const height = await FooterSection.icons[i].getSize(testData.imageParams.height);
        const srcAttr = await FooterSection.icons[i].getAttribute(testData.attributes.src);

        expect(height).toBeGreaterThan(0);
        expect(srcAttr !== null || srcAttr !== '').toBe(true);
      }
    }
  });
});