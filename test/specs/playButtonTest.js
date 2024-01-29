const assert = require('assert');
const playButtonSection = require('../pageobjects/playButton.section.js');

/* global baseUrl */

describe('Casino Table', () => {
  beforeEach('Pre-conditions', async () => {
    await browser.url(baseUrl);
  });

  it('should display correct numbering on the casino listing', () => {
    const casinoRows = $$('.play-section__row');
  
    // Check if the numbering is in increasing order
    for (let i = 0; i < casinoRows.length - 1; i++) {
      const currentNumber = parseInt(casinoRows[i].$('.play-section__index').getText(), 10);
      const nextNumber = parseInt(casinoRows[i + 1].$('.play-section__index').getText(), 10);
  
      // Assert that the current number is less than the next number
      assert.ok(currentNumber < nextNumber, `Numbering is incorrect at index ${i}.`);
    }
  });  

  it('should have correct attributes for casino logos', () => {
    playButtonSection.checkCasinoLogoAttributes();
  });

  it('should have correct attributes for casino bonuses', () => {
    playButtonSection.checkCasinoBonusAttributes();
  });

  it('should have correct attributes for Feature', () => {
    playButtonSection.checkCasinoFeatureItemAttributes();
  });

  it('should have correct attributes for play button', () => {
    playButtonSection.checkPlayButtonAttributes();
  });

  it('should have correct attributes for read review button', () => {
    playButtonSection.checkReviewButtonVisibility();
  });

  it('should redirect to the correct URL when Play now button is clicked and identify the selected casino', () => {
    for (let position = 1; position <= playButtonSection.playButtons.length; position++) {
      // Клік на кнопку "Play now" та очікування редіректу
      playButtonSection.clickPlayButtonAndWaitForRedirect(position);
  
      // Перевірка, що URL містить необхідні параметри (наприклад, element, pos, idcasino)
      const currentUrl = browser.getUrl();
      assert(currentUrl.includes(`element=main-table_play&pos=${position}&idcasino=`), `Unexpected URL parameters for position ${position}`);
  
      // Отримання ідентифікатора казино з URL
      const casinoIdMatch = currentUrl.match(/idcasino=(\d+)/);
      const casinoId = casinoIdMatch ? casinoIdMatch[1] : null;
  
      // Перевірка, що ідентифікатор казино містить цифри
      assert(/^\d+$/.test(casinoId), `Invalid casino ID for position ${position}`);
    }
  });  

  // it('should redirect to the correct URL when Play now button is clicked and identify the selected casino', () => {
  //   for (let position = 1; position <= playButtonSection.playButtons.length; position++) {
  //     // Клік на кнопку "Play now"
  //     playButtonSection.playButtons[position - 1].click();
  
  //     // Очікування редіректу та отримання поточного URL
  //     browser.waitUntil(() => {
  //       const currentUrl = browser.getUrl();
  //       return currentUrl.includes(`${baseUrl}/redirect/`);
  //     }, 5000, `Expected redirect for position ${position}`);
  
  //     // Перевірка, що URL містить необхідні параметри (наприклад, element, pos, idcasino)
  //     const currentUrl = browser.getUrl();
  //     assert(currentUrl.includes(`element=main-table_play&pos=${position}&idcasino=`), `Unexpected URL parameters for position ${position}`);
  
  //     // Отримання ідентифікатора казино з URL
  //     const casinoIdMatch = currentUrl.match(/idcasino=(\d+)/);
  //     const casinoId = casinoIdMatch ? casinoIdMatch[1] : null;
  
  //     // Перевірка, що ідентифікатор казино містить цифри
  //     assert(/^\d+$/.test(casinoId), `Invalid casino ID for position ${position}`);
  //   }
  // });
});