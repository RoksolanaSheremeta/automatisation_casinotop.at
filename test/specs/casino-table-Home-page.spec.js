import testData from '../helpers/test-data';
import CasinoTableSection from '../pageobjects/casino-table-section';
/* global baseUrl */

describe('Casino table on the Home page', () => {
  beforeEach('Pre-conditions', async () => {
    await browser.url(baseUrl);
    if (await CasinoTableSection.reviewButtonInCard[0].isExisting() === false) {
      await browser.url(`https://${testData.promptCredentials[0]}:${testData.promptCredentials[1]}@${baseUrl.slice(8, -1)}`);
    }
    // eslint-disable-next-line
    await browser.pause(1000);
  });

  it('Check review button in card', async () => {
    await expect(CasinoTableSection.reviewButtonInCard).toBeExisting();
    await CasinoTableSection.reviewButtonInCard[0].scrollIntoView({block: 'center'});
    const pageLink = await CasinoTableSection.reviewButtonInCard[0].getAttribute(testData.attributes.href);
    await CasinoTableSection.reviewButtonInCard[0].click();
    await expect(browser).toHaveUrl(pageLink);
  });

  it('Check review button in row', async () => {
    await expect(CasinoTableSection.reviewButtonInRow).toBeExisting();
    await CasinoTableSection.reviewButtonInRow[0].scrollIntoView({block: 'center'});
    const pageLink = await CasinoTableSection.reviewButtonInRow[0].getAttribute(testData.attributes.href);
    await CasinoTableSection.reviewButtonInRow[0].click();
    await expect(browser).toHaveUrl(pageLink);
  });
});
