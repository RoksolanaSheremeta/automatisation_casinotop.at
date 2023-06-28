class HeaderSection {
  get logoIcon () {
    return $('header>div>img');
  }

  get logoIconClickable () {
    return $('header>div>a>img');
  }

  get header () {
    return $('header');
  }

  get langButton () {
    return $$('ul[class*="wpml-menu"]');
  }

  get menuHamburger () {
    return $('header button');
  }

  get menuItems () {
    return $$('ul[class*="header__menu"]>li');
  }

  get menuBlock () {
    return $('#menu-header');
  }
}

export default new HeaderSection();
