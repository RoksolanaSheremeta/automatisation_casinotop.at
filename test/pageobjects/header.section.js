class HeaderSection {
    get logoIcon () {
      return $('div.space-header-logo.box-20.left.relative > div > a > img');
    }
  
    get logoIconClickable () {
      return $('div.space-header-logo.box-20.left.relative > div > a');
    }
  
    // get header () {
    //   return $('header');
    // }
  
    // get langButton () {
    //   return $$('li[class*="menu-item-lang"]');
    // }
  
    // get menuHamburger () {
    //   return $('header button');
    // }
  
    // get menuItems () {
    //   return $$('ul[class*="menu-items"]>li');
    // }
  
    // get menuBlock () {
    //   return $('.js-main-menu');
    // }
}
  
export default new HeaderSection();