class Base {
  get breadcrumbs () {
    return $$('.breadcrumbs-container a');
  }

  get secondNestingLvlBreadcrumb () {
    return $('.breadcrumbs-container strong');
  }

  get allImages () {
    return $$('body img');
  }

  // get closeCookiePopupBtn () {
  //   return $('[class*="js-cookie-accept"]');
  // }
  get spanSelector () {
    return 'span';
  }
}  
export default new Base();
