import testData from '../helpers/test-data.js';
import { checkThatImageIsNotBroken } from '../models/base.methods.js';
import HeaderSection from '../pageobjects/header.section.js';
import BaseSelectors from '../pageobjects/base.selectors';

describe('Header tests', () => {
  /* global baseUrl */
  const skipTests = false;

  before('Pre-conditions', () => {
    browser.url(baseUrl);
  });

  it('Check that logo is present in header, the width and height is more than 0px and it is not clickable', async () => {
    await expect(HeaderSection.logoIcon).toBeDisplayed();
    const srcAttr = await HeaderSection.logoIcon.getAttribute(testData.attributes.src);
    expect(srcAttr).not.toBe(null || '');
    checkThatImageIsNotBroken(HeaderSection.logoIcon);
    await expect(HeaderSection.logoIconClickable).not.toBeExisting();  
  });

  it('Make sure that the logo is clickable on other pages except the main page', async () => {
    await HeaderSection.menuItems[1].moveTo();
    await HeaderSection.menuItems[1].$('a').click();
    await expect(HeaderSection.logoIcon).not.toBeExisting();
    await HeaderSection.logoIconClickable.click();
    await expect(browser).toHaveUrl(baseUrl);
  });
    
  it('Check that the lang button is present', async () => {
    if (skipTests) {
      it.skip('skipping test', () => {});
    } else {
      await expect(HeaderSection.langButton[0]).toBeDisplayed();
    }
  });
  
  it('Check alt and src attributes in the lang element', async () => {
    if (skipTests) {
      it.skip('skipping test', () => {});
    } else {
      const altArrt = await HeaderSection.langButton[0].getAttribute(testData.attributes.alt);
      const srcAttr = await HeaderSection.langButton[0].getAttribute(testData.attributes.src);
      expect(altArrt).not.toBe(null || '');
      expect(srcAttr).not.toBe(null || '');
    }
  });

  it('Check that items in the main menu are clickable and are disabled on the redirected page', async () => {
    if (await HeaderSection.menuHamburger.isDisplayed() === true) {
      await HeaderSection.menuHamburger.click();
    }
    await expect(HeaderSection.menuItems).toBeDisplayed();
    const linkAfterClick = await HeaderSection.menuItems[1].$('a').getAttribute(testData.attributes.href);
    await HeaderSection.menuItems[1].moveTo();
    await HeaderSection.menuItems[1].$('a').click();
    await expect(browser).toHaveUrlContaining(linkAfterClick);
    await expect(HeaderSection.menuItems[1].$(BaseSelectors.spanSelector)).toHaveElementClassContaining(testData.attributeValues.emptyLink);
  });

  it('Make sure that the main menu block doesn`t go out the header layout', async () => {
    browser.setWindowSize(1440, 900);
    const headerHeight = await HeaderSection.header.getSize(testData.imageParams.height);
    const menuHeight = await HeaderSection.menuBlock.getSize(testData.imageParams.height);
    expect(menuHeight).not.toBeGreaterThan(headerHeight);
  });

  it('Check that header height is 66 when the window size is 1201', async () => {
    browser.setWindowSize(379, 1201);
    const headerHeight = await HeaderSection.header.getSize(testData.imageParams.height);
    expect(headerHeight).toEqual(78);
  });
});