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

  constructorBlockstitleandtext = {
    addBlockinButtonpatitleandtext: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtontitleandtext: () => $('button[class*="title-and-text"]'),
  };

  constructorBlocksimageheading = {
    addBlockinButtonpaimageheading: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonimageheading: () => $('button[class*="image-heading"]'),
  };

  constructorBlocksslottable = {
    addBlockinButtonpaslottable: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonslottable: () => $('button[class*="slot-table"]'),
  };

  constructorBlocksstepscards = {
    addBlockinButtonpastepscards: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonstepscards: () => $('button[class*="steps-cards"]'),
  };

  constructorBlocksauthorblock = {
    addBlockinButtonpaauthorblock: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonauthorblock: () => $('button[class*="author-block"]'),
  };

  constructorBlockslinkingcards = {
    addBlockinButtonpalinkingcards: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonlinkingcards: () => $('button[class*="linking-cards"]:not([class*="linking-cards-colored"])'),
  };

  constructorBlocksgamemaintable = {
    addBlockinButtonpagamemaintable: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtongamemaintable: () => $('button[class*="game-main-table"]'),
  };

  constructorBlocksgamegallery = {
    addBlockinButtonpagamegallery: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtongamegallery: () => $('button[class*="game-gallery"]'),
  };

  constructorBlocksgamestable = {
    addBlockinButtonpagamestable: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtongamestable: () => $('button[class*="games-table"]'),
  };

  constructorBlockssiteslist = {
    addBlockinButtonpasiteslist: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonsiteslist: () => $('button[class*="sites-list"]'),
  };

  constructorBlocksgametiles = {
    addBlockinButtonpagametiles: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtongametiles: () => $('button[class*="game-tiles"]'),
  };

  constructorBlockslinkingcardscolored = {
    addBlockinButtonpalinkingcardscolored: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonlinkingcardscolored: () => $('button[class*="linking-cards-colored"]'),
  };

  constructorBlocksblogpostscards = {
    addBlockinButtonpablogpostscards: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonblogpostscards: () => $('button[class*="blog-posts-cards"]'),
  };

  constructorBlockspagesslider = {
    addBlockinButtonpapagesslider: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonpagesslider: () => $('button[class*="pages-slider"]'),
  };

  constructorBlocksauthors = {
    addBlockinButtonpaauthors: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonauthors: () => $('button[class*="authors"]'),
  };

  constructorBlockscardhalfimage = {
    addBlockinButtonpacardhalfimage: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtoncardhalfimage: () => $('button[class*="card-half-image"]'),
  };

  constructorBlocksdontrecommendcasinos = {
    addBlockinButtonpadontrecommendcasinos: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtondontrecommendcasinos: () => $('button[class*="dont-recommend-casinos"]'),
  };

  constructorBlocksquiz = {
    addBlockinButtonpaquiz: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonquiz: () => $('button[class*="quiz"]'),
  };

  constructorBlockstip = {
    addBlockinButtonpatip: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtontip: () => $('button[class*="tip"]'),
  };

  constructorBlocksemailgathering = {
    addBlockinButtonpaemailgathering: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonemailgathering: () => $('button[class*="email-gathering"]'),
  };

  constructorBlocksmindeposit1euro = {
    addBlockinButtonpamindeposit1euro: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonmindeposit1euro: () => $('button[class*="mindeposit-1-euro"]'),
  };

  constructorBlockspaymentscommon = {
    addBlockinButtonpapaymentscommon: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonpaymentscommon: () => $('button[class*="payments-common"]'),
  };

  constructorBlocksadaptiveimages = {
    addBlockinButtonpaadaptiveimages: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonadaptiveimages: () => $('button[class*="adaptive-images"]'),
  };

  constructorBlocksbestonlineslotcasinos = {
    addBlockinButtonpabestonlineslotcasinos: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonbestonlineslotcasinos: () => $('button[class*="best-online-slot-casinos"]'),
  };

  constructorBlockscomparingbonusestable = {
    addBlockinButtonpacomparingbonusestable: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtoncomparingbonusestable: () => $('button[class*="comparing-bonuses-table"]'),
  };

  constructorBlocksslotsslider = {
    addBlockinButtonpaslotsslider: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonslotsslider: () => $('button[class*="slots-slider"]'),
  };

  constructorBlocksmobileapps = {
    addBlockinButtonpamobileapps: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonmobileapps: () => $('button[class*="mobile-apps"]'),
  };

  constructorBlocksimageguide = {
    addBlockinButtonpaimageguide: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonimageguide: () => $('button[class*="image-guide"]'),
  };

  constructorBlockscomparingtable = {
    addBlockinButtonpacomparingtable: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtoncomparingtable: () => $('button[class*="comparing-table"]:not([class*="comparing-bonuses-table"]'),
  };

  constructorBlocksuserreviews = {
    addBlockinButtonpauserreviews: () => $("div[class='block-editor-block-list__layout']"),
    blockinlistButtonuserreviews: () => $('button[class*="user-reviews"]'),
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

  leftMenuSportsbook = {
    pagesTabInLeftMenuSportsbook: () => $('#menu-posts-maranello-sportsbook'),
  }

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