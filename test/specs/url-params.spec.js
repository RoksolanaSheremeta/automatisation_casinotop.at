import testData from '../helpers/test-data';
import {
  checkUrlParams,
  closeSecondBrowserTab,
  getURLparams,
} from '../models/base.methods';
import { clickOnShowMoreButton } from '../models/front-page.methods';
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
    await closeSecondBrowserTab();
  });

  it('Check transfer parameters from logo, cart 1', async () => {
    const urlParams = await getURLparams(CasinoTableSection.logoInCard[0].parentElement(), 'not geo');
    await checkUrlParams(CasinoTableSection.logoInCard[0], urlParams, 'not geo');
  });

  it('Check transfer parameters from overlay, cart 2', async () => {
    const urlParams = await getURLparams($$(CasinoTableSection.cardOverlay)[1], 'not geo');
    await checkUrlParams($$(CasinoTableSection.cardOverlay)[1], urlParams, 'not geo');
  });

  it('Check transfer parameters from CTA, cart 3', async () => {
    const urlParams = await getURLparams(CasinoTableSection.CTAbutton[2], 'not geo');
    await checkUrlParams(CasinoTableSection.CTAbutton[2], urlParams, 'not geo');
  });

  it('Check transfer parameters from logo, row 4', async () => {
    const urlParams = await getURLparams(CasinoTableSection.logoInRow[0].parentElement().parentElement(), 'not geo');
    await checkUrlParams(CasinoTableSection.logoInRow[0], urlParams, 'not geo');
  });

  it('Check transfer parameters from overlay, row 5', async () => {
    const urlParams = await getURLparams($$(CasinoTableSection.rowOverlay)[1], 'not geo');
    await checkUrlParams($$(CasinoTableSection.rowOverlay)[1], urlParams, 'not geo');
  });

  it('Click on the Show More button and check transfer parameters from CTA, row 6', async () => {
    await expect($$(CasinoTableSection.rowOverlay)).toBeDisplayed();
    
    if (await CasinoTableSection.showMoreButton[0].isExisting() === true) {
      await clickOnShowMoreButton();
      const urlParams = await getURLparams(CasinoTableSection.CTAbutton[5], 'not geo');
      await checkUrlParams(CasinoTableSection.CTAbutton[5], urlParams, 'not geo');
    } else {
      console.log('The Show more button is absent');
    }
  });
});
