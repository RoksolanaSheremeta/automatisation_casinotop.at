class CasinoTable {
    get reviewButtonInCard () {
      return $$('div[class*="js-referral"] button[class*="js-referral"]~ a:last-of-type');
    }
    
    get reviewButtonInRow () {
      return $$('[class*="js-ajax-casino-table"] button[class*="js-referral"]~ a:last-of-type');
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
      return $$('[class*="load-more-wrapper"] span');
    }
  
    get attributesKeeper () {
      return $('span#wcp_ut_data_attributes_keeper');
    }
  
    get constructorBlock () {
      return $$('section[data-order] p:nth-child(2)');
    }
  
    get loadingSpinner () {
      return $('[class*="casino loading"]');
    }
  }
export default new CasinoTable();
    