class AdminDashboard {
    login = {
      emailInput: () => $('#user_login'),
      passwordInput: () => $('#user_pass'),
      loginButton: () => $('#wp-submit'),
      errorPopup: () => $('#login_error'),
    };
    
    leftMenu = { 
      pagesTabInLeftMenu: () => $('#menu-pages'),
      postsTabInLeftMenu: () => $('#menu-posts'),
      casinosTabInLeftMenu: () => $('#menu-posts-casino'),
      pluginsTabInLeftMenu: () => $('#menu-plugins'),
      settingsTabInLeftMenu: () => $('#menu-settings'),
      slotsTabInLeftMenu: () => $('#menu-posts-slots'),
      languagesTabInLeftMenu: () => $('#toplevel_page_mlang'),
      authorTab: () => $('#menu-posts-author'),
      submenuItemInNavBar: (tabName) => $('[class*="wp-has-current-submenu"]').$(`a[href*="${tabName}"`),
    };
  
    plugins = {
      cloakingPluginRow: () => $('tr[data-plugin*="cloaking"]'),
      pluginRow: (plugin) => $(`tr[data-slug="${plugin}"]`),
      polylangPROPluginRow: () => $('[data-plugin*="polylang-pro"]'),
      allButtonInPluginStatuses: () => $('li[class="all"]'),
    };
  
    multilangSettings = {
      crossdomainStatusSwitcher: () => $('#crossdomain_status'),
      crossdomainSaveUpdateButton: () => $('#crossdomainAction'),
      showLangInHeaderCheckbox: () => $('[name="show_select_languages_in_header_menu"]'),
      saveSettingsButton: () => $('button*=Save settings'),
      prodOptionInEnvironmentDropdown: () => $('#crossdomain_env option[value="prod"]'),
      postTypeCheckboxes: (type) => $(`[id="type_${type}"]`),
      taxonomyTypeCheckboxes: (type) => $(`[id="taxonomy_${type}"]`),
      saveSitemapSettingsButton: () => $('[name="save_crossdomain_sitemap_settings"]'),
      generateSitemapButton: () => $('#generateSitemapAction'),
      sitemapGenerationResponseText: () => $('#responseSitemapAction'),
      tableHeading: () => $('h3*=Sitemap settings'),
      viewSitemapLink: () => $('a*=View sitemap'),
      useCustomLocaleCheckbox: () => $('[name="status_custom_locale_settings"]'),
      localeOnCrossdomainServiceInput: (value) => $(`[name*="global_hreflang_field"][value="${value}"]`),
      allLocalesOnCrossdomainServiceInput: () => $$('#customHreflanfAdded input[placeholder="new locale"]'),
      localeOnThisSite: () => $$('[placeholder="exist locale"]'),
      showSelectedLanguagesInHeaderCheckbox: () => $('#show_select_languages_in_header_menu'),
    };
  
    cloakingAnticloneSettings = {
      enableCloakingAntiCloneCheckbox: () => $('input[name="enable_cloaking_anti_clone"][type="checkbox"]'),
      anticloneCacheEnableDisableOptions: () => $$('select[name="enable_cloaking_anti_clone_cache"] option'),
      saveChangesButton: () => $$('input[value="Save Changes"]'),
      anticloneHeadTagTextArea: () => $('textarea[name="cloaking_anti_clone_text"]'),
      userAgentsWhitelistBlock: () => $('textarea[name*="cloaking_anti_clone_user_agents"]').parentElement()
        .parentElement(),
      anticloneSymbolsTable: () => $('table[class*="cloaking_anti_clone_letters_array__table"]'),
      addletterButtonAnticlone: () => $('button[id*="cloaking_anti_clone_letters_array__add"]'),
      replaceLettersInAnticloneTable: () => $$('[name*="anti_clone_letters_array__vals"]'),
    };
  
    postTypesTable = {
      rowInTable: () => $$('#the-list tr:not([class*="draft"]):not([class*="private"]):not([class*="no-items"])'),
      rowInTableForTagsCategoriesPayment: () => $$('#the-list tr'),
      editPostButton: () => $$('tr:not([class*="draft"]):not([class*="private"]) .row-actions .edit'),
      viewButton: () => $$('.row-actions .view > a'),
    };
  
    editPostsPage = {
      addToSitemapCheckboxTaxonomies: () => $('[data-name="sitemap_add_to_index"] input[type="checkbox"]'),
      addToSitemapCheckboxMultilang: () => $('[name="sitemap_add_to_index"]'),
      updateButton: () => $('input[value="Update"]'),
      successMessage: () => $('[class="notice notice-success"]'),
      languagesBlockOnEditPage: () => $('#ml_box'),
      addTranslationPlusButtons: () => $$('td[class*="edit-column"] a[class="pll_icon_add"]'),
      editTranslationButtons: () => $$('td[class*="edit-column"] a[class="pll_icon_edit"]'),
      translationInput: () => $$('span [id*="tr_lang"]'),
      linkToPage: () => $('#sample-permalink'),
      showToolbarCheckbox: () => $('#admin_bar_front'),
      titleInput: () => $('#title'),
      authorSocialMediaLink: () => $$('[data-name*="wcp_ut_author_social_link_url"] input'),
    };
  
    headerBarMenu = {
      languageSettingButtonInHeaderBar: () => $('#wp-admin-bar-languages'),
      langItemFromLangDropdownInHeaderBar: () => $$('#wp-admin-bar-languages-default a[class="ab-item"]'),
      visitSiteButtonInTopNavigationMenu: () => $('#wp-admin-bar-site-name'),
      myAccountButtonInNavBar: () => $('#wp-admin-bar-my-account'),
      logoutButtonInMyAccountOptions: () => $('#wp-admin-bar-logout'),
      editProfileButtonInUserMenu: () => $('#wp-admin-bar-edit-profile'),
      yourProfileForm: () => $('#your-profile'),
      editPageButtonFromTopNavigationPanel: () => $('#wp-admin-bar-edit'),
    };
  
    languages = {
      errorsInDevAdmin: () => $$('div[class*="error"]'),
      slugsInLanguagesTable: () => $$('td[class="slug column-slug"]'),
    };
  
    get notAllowedPopup() {
      return $('#error-page');
    }
  }
export default new AdminDashboard();
  
  