class Webcheck {
  get usernameInput () {
    return $('[name="username"]');
  }
  
  get passwordInput () {
    return $('[name="password"]');
  }
  
  get loginButton () {
    return $('[type="submit"]');
  }
  
  get navigationSearchInput () {
    return $('#nav_search');
  }
  
  get searchResult () {
    return $$('.nav__search__result');
  }
  
  get tableHeading () {
    return $('th*=Password');
  }
  
  get userRowInTable () {
    return $('.table__base__all tbody tr');
  }
  
  get userLoginCell () {
    return $('.table__base__all tbody tr td:nth-child(1)');
  }
  
  get userPasswordCell () {
    return $('.table__base__all tbody tr td:nth-child(2)');
  }
  
  get endDateInput () {
    return $('.input__search__base__stale');
  }
  
  get createUserButton () {
    return $('button*=Create User');
  }
  
  get closePopUpButton () {
    return $('.mass__search__close__button');
  }
}
export default new Webcheck();  