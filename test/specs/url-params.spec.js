import testData from '../helpers/test-data';
import {
  checkThatElemIsPresented,
  checkUrlParams,
  clickOnShowMoreButton,
  getURLparams,
} from '../models/base.methods';
import CasinoTableSection from '../pageobjects/casino-table-section';
import HeaderSection from '../pageobjects/header.section';

describe('URL parameters transfer', () => {
  /* global baseUrl */
  beforeEach('Pre-conditions', async () => {
    await browser.url(baseUrl);
    if (await HeaderSection.menuBlock.isExisting() === false) {
      await browser.url(`https://${testData.promptCredentials[0]}:${testData.promptCredentials[1]}@${baseUrl.slice(8, -1)}`);
    }
    await browser.waitUntil(async () => {
      return !(await CasinoTableSection.loadingSpinner.isDisplayed());
    });
  });

  afterEach('Post-conditions', async () => {
    const windowHandles = await browser.getWindowHandles();
    if (windowHandles.length > 1) {
      await browser.closeWindow();
    }
    await browser.switchToWindow(windowHandles[0]);
  });

  it('Check transfer parameters from logo, cart 1', async () => {
    const urlParams = await getURLparams(CasinoTableSection.logoIncart[0].parentElement());
    await checkUrlParams(CasinoTableSection.logoIncart[0], urlParams);
  });

  it('Check transfer parameters from overlay, cart 2', async () => {
    const urlParams = await getURLparams(CasinoTableSection.cardOverlay[1]);
    await checkUrlParams(CasinoTableSection.cardOverlay[1], urlParams);
  });

  it('Check transfer parameters from CTA, cart 3', async () => {
    const urlParams = await getURLparams(CasinoTableSection.CTAbutton[2]);
    await checkUrlParams(CasinoTableSection.CTAbutton[2], urlParams);
  });

  it('Check transfer parameters from logo, row 4', async () => {
    const urlParams = await getURLparams(CasinoTableSection.logoInRow[0].parentElement().parentElement());
    await checkUrlParams(CasinoTableSection.logoInRow[0], urlParams);
  });

  it('Check transfer parameters from overlay, row 5', async () => {
    const urlParams = await getURLparams(CasinoTableSection.rowOverlay[1]);
    await checkUrlParams(CasinoTableSection.rowOverlay[1].$('div'), urlParams);
  });

  it('Click on the Show More button and check transfer parameters from CTA, row 6', async () => {
    await expect(await CasinoTableSection.rowOverlay).toBeDisplayed();
    const showMoreButtonExists = await checkThatElemIsPresented(CasinoTableSection.showMoreButton[0]);
    if (showMoreButtonExists) {
      await clickOnShowMoreButton();
      const urlParams = await getURLparams(CasinoTableSection.CTAbutton[5]);
      await checkUrlParams(CasinoTableSection.CTAbutton[5], urlParams);
    } else {
      console.log('The Show more button is absent');
    }
  });
});