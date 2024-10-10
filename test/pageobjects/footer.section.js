class FooterSection {
  get footer () {
    return $('body footer');
  }

  get menuSections () {
    return $$('site-footer__menu-block');
  }

  get sectionsTitles () {
    return $$('footer>div>div>div>div>span');
  }

  get menuItems() {
    return $$('div[class="site-footer__menu"] ul > li');
}


  get copyrightText () {
    return $$('div*=Copyright');
  }

  get icons () {
    return $$('footer img:not(li>a>img)');
  }
  get langButton () {
    return $$('.js-wpml-ls-item-toggle.wpml-ls-item-toggle');RR
  }
}

export default new FooterSection();
