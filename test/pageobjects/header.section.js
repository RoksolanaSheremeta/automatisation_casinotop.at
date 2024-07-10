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

  get menuHamburger () {
    return $('header button');
  }

  get menuItems () {
    return $$('ul[id*="menu-header"]>li');
  }

  get menuBlock () {
    return $('ul[id="menu-header"]');
  }
}

export default new HeaderSection();
