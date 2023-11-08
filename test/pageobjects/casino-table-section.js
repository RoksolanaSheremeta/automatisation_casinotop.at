class CasinoTable {
  get reviewButtonInCard () {
    return $$('div[class*="play-section__row-data"] button[class*="primary-button"]~ a:last-of-type');
  }
  
  get reviewButtonInRow () {
    return $$('div[class*="play-section__row-data"] button[class*="primary-button"]~ a:last-of-type');
  }

  get logoIncart () {
    return $$('div[class="play-section__logo"]');
  }

  get logoInRow () {
    return $$('[class*="js-ajax-casino-table"] div[class*="fragment-table"]>div>div>div>img');
  }

  get cardOverlay () {
    return $$('div:not(.wcp-bonus-offers__list) > div[class*="play-section__row play-section__row--body play-section__row-js"]');
  }

  get rowOverlay () {
    return $$('[class*="js-ajax-casino-table"] div[class*="fragment-table"]>div');
  }

  get CTAbutton () {
    return $$('button[class*="primary-button"]');
  }

  get showMoreButton () {
    return $$('[class*="main-table__show-more"]');
  }
}
export default new CasinoTable();