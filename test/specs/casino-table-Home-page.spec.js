import casinoTableSection from '../pageobjects/casino-table-section';

describe('Casino table on the Home page', () => {
  beforeEach('Pre-conditions', () => {
    browser.url('./');
  });

  it('Check review button in card', async () => {
    await expect(casinoTableSection.reviewButtonInCard).toBeExisting();
    let pageLink = await casinoTableSection.reviewButtonInCard[0].getAttribute('href');
    if (await pageLink.includes('casinotop.co.nz') === false) {
      pageLink += '/';
    }
    await casinoTableSection.reviewButtonInCard[0].click();
    await expect(browser).toHaveUrl(pageLink);
  });

  it('Check review button in row', async () => {
    await expect(casinoTableSection.reviewButtonInRow).toBeExisting();
    let pageLink = await casinoTableSection.reviewButtonInRow[0].getAttribute('href');
    if (await pageLink.includes('casinotop.co.nz') === false) {
      pageLink += '/';
    }
    await casinoTableSection.reviewButtonInRow[0].click();
    await expect(browser).toHaveUrl(pageLink);
  });
});
