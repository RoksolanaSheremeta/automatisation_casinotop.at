class CasinoTable {
  get reviewButtonInCard () {
    return $$('div[class*="play-section__row-data"] button[class*="primary-button"]~ a:last-of-type');
  }
  
  get reviewButtonInRow () {
    return $$('div[class*="play-section__row-data"] button[class*="primary-button"]~ a:last-of-type');
  }

  get logoIncart () {
    return $$('div:not(.wcp-bonus-offers__list) > div[class*="js-referral"] div>img');
  }

  get logoInRow () {
    return $$('[class*="js-ajax-casino-table"] div[class*="fragment-table"]>div>div>div>img');
  }

  get cardOverlay () {
    return $$('div:not(.wcp-bonus-offers__list) > div[class*="js-referral"]');
  }

  get rowOverlay () {
    return $$('[class*="js-ajax-casino-table"] div[class*="fragment-table"]>div');
  }

  get CTAbutton () {
    return $$('button[class*="js-referral"]');
  }

  get showMoreButton () {
    return $$('[class*="load-more-wrapper"]');
  }
}
export default new CasinoTable();