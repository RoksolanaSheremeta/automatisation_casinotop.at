class AdminDashboard {
  get emailInput () {
    return $('#user_login');
  }
        
  get passwordInput () {
    return $('#user_pass');
  }
        
  get loginButton () {
    return $('#wp-submit');
  }
  
  get crossdomainPolylangPluginRow () {
    return $('tr[data-slug="crossdomain-polylang"]');
  }
  
  menuItemInNavBar (tabName) {
    return $(`div[class="wp-menu-name"]*=${tabName}`);
  }

  submenuItemInNavBar (tabName) {
    return $('li[id*="menu-posts-casino"]').$(`li*=${tabName}`);
  }
  
  get crossdomainStatusSwitcher () {
    return $('#crossdomain_status');
  }
  
  get crossdomainSaveUpdateButton () {
    return $('#crossdomainAction');
  }
  
  get showLangInHeaderCheckbox () {
    return $('[name="show_select_languages_in_header_menu"]');
  }
  
  get saveSettingsButton () {
    return $('button*=Save settings');
  }
  
  get prodOptionInEnvironmentDropdown () {
    return $('#crossdomain_env option[value="prod"]');
  }

  get rowInTable () {
    return $$('[class*="table-view-list"] tbody tr');
  }

  get rowInTableForTagsCategoriesPayment () {
    return $$('#the-list tr');
  }

  get editPostButton () {
    return $$('.row-actions .edit');
  }

  get viewButton () {
    return $$('.row-actions .view > a');
  }

  get linkToPage () {
    return $('#sample-permalink');
  }
}  
export default new AdminDashboard();