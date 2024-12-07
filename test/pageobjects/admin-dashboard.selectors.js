class AdminDashboard {
  login = {
    emailInput: () => $('#user_login'),
    passwordInput: () => $('#user_pass'),
    loginButton: () => $('#wp-submit'),
    errorPopup: () => $('#login_error'),
    theEmailIsCorrectButton: () => $('#correct-admin-email'),
  };
  constructorBlocks = {
    addBlockinButton: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButton: () => $('button[class*="faq"]:not([class*="yoast"])'),
  };

  constructorBlocksmaintable = {
    addBlockinButtonmaintable: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonmaintable: () => $('button[class*="blocks-main-table"]'),
  };

  constructorBlockstextwithlist = {
    addBlockinButtonpatextwithlist: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtontextwithlist: () => $('button[class*="text-with-list"]'),
  };

  constructorBlocksblogposts = {
    addBlockinButtonpablogposts: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonblogposts: () => $('button[class*="blog-posts"]:not([class*="blog-posts-cards"])'),
  };

  constructorBlockssteplist = {
    addBlockinButtonpasteplist: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonsteplist: () => $('button[class*="step-list"]'),
  };

  constructorBlocksreviewapplication = {
    addBlockinButtonpareviewapplication: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonreviewapplication: () => $('button[class*="review-application"]'),
  };

  constructorBlocksaccordionblock = {
    addBlockinButtonpaaccordionblock: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonaccordionblock: () => $('button[class*="accordion-block"]'),
  };

  constructorBlockscasinoreview = {
    addBlockinButtonpacasinoreview: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtoncasinoreview: () => $('button[class*="casino-review"]'),
  };

  constructorBlockscasinobanner = {
    addBlockinButtonpacasinobanner: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtoncasinobanner: () => $('button[class*="casino-banner"]'),
  };

  constructorBlocksproscons = {
    addBlockinButtonpaproscons: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonproscons: () => $('button[class*="pros-cons"]'),
  };

  constructorBlocksslothero = {
    addBlockinButtonpaslothero: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonslothero: () => $('button[class*="slot-hero"]'),
  };



  leftMenu = {
    pagesTabInLeftMenu: () => $('#menu-pages'),
  };

  leftMenuCasino = {
    pagesTabInLeftMenuCasino: () => $('#menu-posts-maranello-casino'),
  };

  leftMenuPost = {
    pagesTabInLeftMenuPost: () => $('#menu-posts'),
  };

  leftMenuSlot = {
    pagesTabInLeftMenuSlot: () => $('#menu-posts-maranello-game'),
  };

  addNewPage = {
    addNewButtoninPagesTab: () => $('.page-title-action'),
  }

  get successMessage() {
    return $('div[aria-label="Dismiss this notice"]');
  }

  editPostsPage = {
    postTitle: () => $('h1[aria-label="Add title"]'),
  };

 
  updatePageAndCheckMessage = {
    updateButton: () => $('.components-button.editor-post-publish-panel__toggle'),
  }

  get secondPublishButton () {
    return $('.components-button.editor-post-publish-button.editor-post-publish-button__button.is-primary');
  }

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