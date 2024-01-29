/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
class PlayButtonSection {
  get casinoLogos() {
    return $$('.play-section__logo-img');
  }

  get casinoBonuses() {
    return $$('.play-section__bonus');
  }

  get casinoFeatureItems() {
    return $$('.play-section__features-item');
  }

  get playButtons() {
    return $$('.play-section__play');
  }

  get reviewButtons() {
    return $$('.play-section__rating-review');
  }

  /**
   * Check if all casino logos have correct attributes
   */
  checkCasinoLogoAttributes() {
    this.casinoLogos.forEach((logo, index) => {
      const dataCasino = logo.getAttribute('data-casino');
      const dataElement = logo.getAttribute('data-element');
      const dataPosition = logo.getAttribute('data-position');

      // Check if attributes exist and have correct values
      assert.ok(dataCasino, `Casino logo ${index + 1} should have data-casino attribute.`);
      assert.ok(dataElement === 'main-table_logo', `Casino logo ${index + 1} should have data-element="main-table_logo" attribute.`);
      assert.ok(dataPosition == index + 1, `Casino logo ${index + 1} should have data-position="${index + 1}" attribute.`);
    });
  }

  /**
   * Check if all casino bonuses have correct attributes
   */
  checkCasinoBonusAttributes() {
    this.casinoBonuses.forEach((bonus, index) => {
      const dataCasino = bonus.getAttribute('data-casino');
      const dataElement = bonus.getAttribute('data-element');
      const dataPosition = bonus.getAttribute('data-position');

      // Check if attributes exist and have correct values
      assert.ok(dataCasino, `Casino bonus ${index + 1} should have data-casino attribute.`);
      assert.ok(dataElement === 'main-table_bonus', `Casino bonus ${index + 1} should have data-element="main-table_bonus" attribute.`);
      assert.ok(dataPosition == index + 1, `Casino bonus ${index + 1} should have data-position="${index + 1}" attribute.`);
    });
  }

  /**
   * Check if all casino feature items have correct attributes
   */
  checkCasinoFeatureItemAttributes() {
    this.casinoFeatureItems.forEach((featureItem, index) => {
      const dataCasino = featureItem.getAttribute('data-casino');
      const dataElement = featureItem.getAttribute('data-element');
      const dataPosition = featureItem.getAttribute('data-position');

      // Check if attributes exist and have correct values
      assert.ok(dataCasino, `Casino feature item ${index + 1} should have data-casino attribute.`);
      assert.ok(dataElement === 'main-table_features', `Casino feature item ${index + 1} should have data-element="main-table_features" attribute.`);
      assert.ok(dataPosition == index + 1, `Casino feature item ${index + 1} should have data-position="${index + 1}" attribute.`);
    });
  }

  /**
   * Check if all play buttons have correct attributes
   */
  checkPlayButtonAttributes() {
    this.playButtons.forEach((button, index) => {
      const dataCasino = button.getAttribute('data-casino');
      const dataElement = button.getAttribute('data-element');
      const dataPosition = button.getAttribute('data-position');

      // Check if attributes exist and have correct values
      assert.ok(dataCasino, `Play button ${index + 1} should have data-casino attribute.`);
      assert.ok(dataElement === 'main-table_play', `Play button ${index + 1} should have data-element="main-table_play" attribute.`);
      assert.ok(dataPosition == index + 1, `Play button ${index + 1} should have data-position="${index + 1}" attribute.`);
    });
  }

  /**
   * Check if "Read review" button should be displayed based on the casino status
   * @param {string} casinoStatus - The status of the casino (e.g., 'draft' or 'published')
   */
  checkReviewButtonVisibility(casinoStatus) {
    this.reviewButtons.forEach((button, index) => {
      // Check if attributes exist and have correct values
      assert.ok(dataCasino, `Review button ${index + 1} should have data-casino attribute.`);
      assert.ok(dataElement === 'main-table_review', `Review button ${index + 1} should have data-element="main-table_review" attribute.`);
      assert.ok(dataPosition == index + 1, `Review button ${index + 1} should have data-position="${index + 1}" attribute.`);

      // Check if the casino is in 'draft' status
      if (casinoStatus === 'draft') {
        // If 'draft', hide the button
        assert.ok(!button.isDisplayed(), `Review button ${index + 1} should be hidden for a casino in 'draft' status.`);
      } else {
        // If not 'draft', ensure the button is displayed
        assert.ok(button.isDisplayed(), `Review button ${index + 1} should be visible for a casino in 'published' status.`);
      }
    });
  }

  /**
   * Click on the "Play now" button and wait for redirection
   * @param {number} position - The position of the casino in the table
   */
  clickPlayButtonAndWaitForRedirect(position) {
    const playButton = this.playButtons[position - 1];
    
    // Клік на кнопку "Play now"
    playButton.click();

    // Очікування редіректу
    browser.waitUntil(() => {
      const currentUrl = browser.getUrl();
      return currentUrl.includes(`${baseUrl}/redirect/`);
    }, 5000, `Expected redirect for position ${position}`);
  }
}

module.exports = new PlayButtonSection();
