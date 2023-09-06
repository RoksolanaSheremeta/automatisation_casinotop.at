// import testData from '../helpers/test-data.js';
// import { waitForElement } from '../models/base.methods.js';
import FooterSection from '../pageobjects/footer.section.js';
import Base from '../pageobjects/base.selectors.js';


describe('Footer tests', () => {
  before('Pre-conditions', () => {
    browser.url('./');
  });

  it('Check that the footer is present and displayed on the page', async () => {
    await expect(FooterSection.footer).toBeDisplayed();
  });

  it('Make sure that blocks with menus are present in the footer and have correct titles', async () => {
    await expect(FooterSection.menuSections).toBeExisting();
    await FooterSection.menuSections[0].scrollIntoView();
    if (await FooterSection.sectionsTitles.length !== 0 || undefined) {
      await expect(FooterSection.sectionsTitles).toBeDisplayed();
    }
  });

  it('Make sure that copyright data is displayed in footer', async () => {
    await FooterSection.footer.scrollIntoView();
    const copyrightElem = await FooterSection.copyrightText[1];
    await browser.fullscreenWindow();
    if (await Base.closeCookiePopupBtn.isExisting() === true) {
      await Base.closeCookiePopupBtn.click();
    }
    await expect(copyrightElem).toBeDisplayed();
    await expect(copyrightElem).toHaveTextContaining('© Copyright 2023');
  });

  it('Make sure that all images in the footer are displayed', async () => {
    await FooterSection.footer.scrollIntoView();
    const images = await FooterSection.icons;
    await expect(images).toBeExisting();
    for (let index = 0; index < images.length; index++) {
      const height = await images[index].getSize('height');
      expect(height).toBeGreaterThan(0);
      const srcArrt = await images[index].getAttribute('src');
      await expect(srcArrt).not.toBe(null || '');
    }
  });
});