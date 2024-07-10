import testData from '../helpers/test-data.js';
import { checkThatImageIsNotBroken } from '../models/base.methods.js';
import HeaderSection from '../pageobjects/header.section.js';
import BaseSelectors from '../pageobjects/base.selectors';
import FrontPage from '../pageobjects/front-pages.selectors.js';

describe('Header tests', () => {
  /* global baseUrl */
  
  before('Pre-conditions', async () => {
    await browser.url(baseUrl);
    if (await HeaderSection.menuBlock.isExisting() === false) {
      await browser.url(`https://${testData.promptCredentials[0]}:${testData.promptCredentials[1]}@${baseUrl.slice(8, -1)}`);
    }
  });

  it('Check that logo is present in header, the width and height is more than 0px and it is not clickable', async () => {
    await expect(HeaderSection.logoIcon).toBeDisplayed();
    const srcAttr = await HeaderSection.logoIcon.getAttribute(testData.attributes.src);
    expect(srcAttr !== null || srcAttr !== '').toBe(true);
    await checkThatImageIsNotBroken(HeaderSection.logoIcon);
    await expect(HeaderSection.logoIconClickable).not.toBeExisting();  
  });

  it('Make sure that the logo is clickable on other pages except the main page', async () => {
    await HeaderSection.menuItems[1].moveTo();
    await HeaderSection.menuItems[1].$('a').click();
    await expect(HeaderSection.logoIcon).not.toBeExisting();
    await HeaderSection.logoIconClickable.click();
    await expect(browser).toHaveUrl(baseUrl);
  });

  it('Check that items in the main menu are clickable and are disabled on the redirected page', async () => {
    if (await HeaderSection.menuHamburger.isDisplayed() === true) {
      await HeaderSection.menuHamburger.click();
    }
    await expect(FrontPage.header.menuItems()).toBeDisplayed();
    const linkAfterClick = await FrontPage.header.menuItems()[0].$('a').getAttribute(testData.attributes.href);
    await FrontPage.header.menuItems()[0].moveTo();
    await FrontPage.header.menuItems()[0].$('a').click();
    await expect(browser).toHaveUrlContaining(linkAfterClick);
    await expect(FrontPage.header.menuItems()[0].$(BaseSelectors.spanSelector)).toHaveElementClassContaining(testData.attributeValues.emptyLink);
  });

  it('Make sure that the main menu block doesn`t go out the header layout', async () => {
    browser.setWindowSize(1440, 900);
    const headerHeight = await HeaderSection.header.getSize(testData.imageParams.height);
    const menuHeight = await HeaderSection.menuBlock.getSize(testData.imageParams.height);
    expect(menuHeight).not.toBeGreaterThan(headerHeight);
  });

  it('Check that header height is 60 when the window size is 1201', async () => {
    browser.setWindowSize(379, 1201);
    const headerHeight = await HeaderSection.header.getSize(testData.imageParams.height);
    expect(headerHeight).not.toBeLessThan(55);
    expect(headerHeight).not.toBeGreaterThan(78);
  });
});