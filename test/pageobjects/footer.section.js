class FooterSection {
  get footer () {
    return $('body footer');
  }

  get menuSections () {
    return $$('footer ul');
  }

  get sectionsTitles () {
    return $$('footer>div>div>div>span');
  }

  get menuItems () {
    return $$('footer ul>li>a');
  }

  get copyrightText () {
    return $$('div*=Copyright');
  }

  get icons () {
    return $$('footer img:not(li>a>img)');
  }
}

export default new FooterSection();
