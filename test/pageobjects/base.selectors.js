class Base {
    get breadcrumbs () {
      return $$('.breadcrumbs-container a');
    }
  
    get secondNestingLvlBreadcrumb () {
      return $('.breadcrumbs-container strong');
    }
  
    // remove this when will be fixed
    get secondNestingLvlBreadcrumb2 () {
      return $$('[aria-current="page"]');
    }
  
    get allImages () {
      return $$('body img');
    }
  
    get closeCookiePopupBtn () {
      return $('[class*="js-cookie-accept"]');
    }
  
    get forCheckingHrefsAttributes () {
      return $$('link[rel="alternate"]');
    }
  
    forCheckingHrefsAttributesInSpecificDomain (domain) {
      return $$(`link[rel="alternate"][href*="${domain}"]`);
    }
  
    get imageSelector () {
      return 'img';
    }
  
    get spanSelector () {
      return 'span';
    }
  
    get textareaSelector () {
      return 'textarea';
    }
  
    get deactivateSelector () {
      return '.deactivate';
    }
  
    get inputSelector () {
      return 'input';
    }
  
    get wpContentSelector () {
      return 'div*=wp-content';
    }
  
    get submitButton () {
      return 'input[type="submit"]';
    }
  
    get jsonLD () {
      return $$('script[type="application/ld+json"]');
    }
  
    get pageLangAttribute () {
      return $('html[lang]');
    }
  
    get attributesKeeper () {
      return $('#wcp_ut_data_attributes_keeper');
    }
  
    get error404 () {
      return $('h1*=404');
    }
  
    get imgWith404Error () {
      return $('img[src*="404"]');
    }
  
    metaCharsetSelector (headText) {
      return $(`meta[charset="${headText}"]`);
    }
  
    get titleInHeadBlock () {
      return $('head title');
    }
  
    get menuItems () {
      return $$('[id*="menu-item"]');
    }
  
    get authorBlock () {
      return $('div[class*="b386c41 bfad324"]');
    }
  
    get faqBlock () {
      return $('.faq');
    }
  }  
export default new Base();
  