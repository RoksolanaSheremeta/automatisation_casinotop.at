class FrontPage {
  /* global baseUrl */
  footer = {
    footerBlock: () => $('body footer'),
    menuSections: () => $$('footer ul'),
    sectionsTitles: () => $$('footer>div>div>div>span'),
    menuItems: () => $$('footer ul>li>a'),
    copyrightText: () => $$('div*=Copyright'),
    icons: () => $$('footer img:not(li>a>img):not([class*="menu-item"])'),
    disclaimer: (textToContain) => $('footer[class]').$(`//*[contains(text(), "${textToContain}")]`),
  };
  
  header = {
    headerBlock: () => $('header'),
    logoIcon: () => $('header>div>span>img[src*="wp-content"]'),
    logoIconClickable: () => $(`header a[href="${baseUrl.slice(0, -1)}"]>img`),
    langButton: () => $('nav[class*="language"]>ul>li'),
    langButtonOptions: () => $$('li[class*="menu-item-lang"]'),
    imagesInLangOptions: () => $$('li[class*="menu-item-lang"] img'),
    menuHamburger: () => $('header button'),
    menuItems: () => $$('ul[class*="header__menu"]>li'),
    currentMenuItems: () => $$('li[class*="current"] li[class*="menu-item"] span'),
    menuBlock: () => $('.js-main-menu'),
  };
  
  pagination = {
    paginationPageNumber: () => $$('a[class="page-numbers"]'),
    currentPageNumber: () => $('span[class="page-numbers current"]'),
    previousPageNumberArrow: () => $('a[class="prev page-numbers"]'),
    lastPageNumberArrow: () => $('a[class="next page-numbers"]'),
  };
  
  casinoPage = {
    casinoLogo: () => $('main>div>div:nth-child(1)[style]'),
    welcomeBonusItems: () => $$('.details-bonus-info>div'),
    termsAndConditionsLinkInWelcomeBonusBlock: () => $('.details-bonus-info>span[class*="terms-conditions"]'),
    termsAndConditionsTextInWelcomeBonusBlock: () => $('.js-terms_popup--inner p'),
    linkInTermsAndConditionsBlock: () => $('.js-full_terms'),
    lastUpdateTitle: () => $('[data-aid="singleCasinoUpdateLabel"]'),
    lastUpdateDate: () => $('[data-aid="singleCasinoUpdateValue"]'),
    ctaButton: () => $('main>div>div>button[class*="js-referral"]'),
    scrollButtonUnderCTA: () => $('[data-related-id="relatedCasinos"] span'),
    mainInfoTitle: () => $('[class*="api-info-main"]>div:nth-child(1)'),
    casinoBlocksFromNotAvailablePopup: () => $$('.modal-content div:not(.wcp-bonus-offers__list) > div[class*="js-referral"'),
    casinoNamesFromRelatedCasinosSection: () => $$('#relatedCasinos div[class*="js-referral"]>div:nth-child(1)'),
    apiFieldsTitles: () => $$('[class*="api-info-main"] div div div:nth-child(1)'),
    apiFieldsValues: () => $$('[class*="api-info-main"] div div div:nth-child(2)'),
    linksInApiFieldsValues: () => $$('[class*="api-info-main"] div div div:nth-child(2) a'),
    readMoreButtonInContentBlock: () => $('span[class*="js-details-info-toggler"]'),
    withdrawalLimitsItemsInBlock: () => 'div:nth-child(2) div div:nth-child(2)',
    screenshotsBlock: {
      screenShotsCarousel: () => $('div[class*="carousel"]'),
      descriptionContainerInScreenshotBlock: () => $('.gallery-description'),
      descriptionInScreenshotBlock: () => $('.gallery-caption p'),
      nextArrowInScreenshotsCarousel: () => $('.owl-nav button[class*="next"]'),
      previousArrowInScreenshotsCarousel: () => $('.owl-nav button[class*="prev"]'),
      owlNavigationDotsInScreenshotsBlock: () => $$('.owl-dots button'),
      imagesInScreenshotCarousel: () => $$('[class*="owl-item"]:not([class*="cloned"])'),  
    },
    featuresBlock: {
      blockTitle: () => $('[class*="api-info-features"]>div:nth-child(1)'),
      fieldsTitles: () => $$('[class*="api-info-features"] div:nth-child(2) div div:nth-child(1)'),
      fieldsValues: () => $$('[class*="api-info-features"] div:nth-child(2) div div:nth-child(2)'),
    },
    supportBlock: {
      blockTitle: () => $('[class*="api-info-main"]+div>div:nth-child(1)'),
      blockMessage: () => $('[class*="api-info-main"]+div>div:nth-child(2)'),
      itemsInBlock: () => $$('[class*="api-info-main"] ~ div:nth-child(2)>div>div'),
    },
    paymentsBlock: {
      paymentsCards: () => 'div:nth-child(2) div',
      payoutAndDepositBlocksTitles: () => $$('[class*="js-payments-info"] span'),
      showAllButton: () => $$('[class*="payments-info-toggler"]'),
      taxonomiesNamesInPayoutDepositBlocks: () => $$('[class*="payments-info-content"]>div:not(:nth-child(1))>div:nth-child(2)'),
      taxonomiesValuesInPayoutDepositBlocks: () => $$('[class*="payments-info-content"]>div:not(:nth-child(1))>div:not(:nth-child(2)):not(:nth-child(1)) div:nth-child(2)'),
      columnTitles: () => $$('[class*="payments-info-content"]>div:nth-child(1)>div'),
    },
    reviewBlock: {
      userReviewBlocks: () => $$('.user-reviews-item__container>div'),
      blockContainer: () => $('#user-reviews'),
      prosAndConstItems: () => $$('.user-reviews-item__container>div ul>li'),
      loadMoreButton: () => $('#user-reviews button[class*="load-more"]'),
      rateThisCasinoButton: () => $('.user-reviews-header button'),
      currentRating: () => $('[class*="user-reviews-header__rating-value"]'),
      maxRating: () => $('[class*="user-reviews-header__rating-limit"]'),
      countOfUsersWhoWroteReview: () => $('[class="user-reviews-header__rating-text"]'),
    },
    ratingBlock: {
      ratingTitlesInTable: () => $$('#user-reviews + div>:nth-child(2)>div>div:nth-child(1)'),
      ratingValuesInTable: () => $$('#user-reviews + div>:nth-child(2)>div>div:nth-child(2)'),
      ratingStarsInTable: () => $$('#user-reviews + div span[style*="width"]'),
      currentRating: () => $('#user-reviews + div>div:nth-child(1) span:nth-child(1)'),
      maxRatingValue: () => $('#user-reviews + div>div:nth-child(1) span:nth-child(2)'),
      overalRatingTextInCard: () => $('#user-reviews + div>div:nth-child(1)>div:nth-child(2)'),
    },
    providersBlock: {
      itemsContainer: () => $('[class*="js-providers-info-items"]'),
      showMoreButton: () => $('[class*="js-providers-loader"]'),
      providersCards: () => $$('[class*="js-providers-info-items"] div:not([class*="loader"])'),
    },
    stickyBar: {
      stickySTAbar: () => $('[class*="js-nav-info"]'),
      stickySTAButton: () => $('[class*="js-nav-info"] button'),
      firstBonus: () => $('[class*="js-nav-info"] div>div:nth-child(1)>div:nth-child(2)'),
      secondBonus: () => $('[class*="js-nav-info"] div>div:nth-child(1)>div:nth-child(3)'),  
    },
    relatedCasinosBlock: {
      blockContainer: () => $('[class*="js-related-casinos"]'),
      casinosContainers: () => $$('[class*="js-related-casinos"]>div>div'),
      componentsTitlesInCards: (component) => $$(`[data-aid="casinoComponent${component}"] div:nth-child(1)`),
      componentsValuesInCards: (component) => $$(`[data-aid="casinoComponent${component}"] div:nth-child(2)`),
      casinosLogos: () => $$('#relatedCasinos div img'),
      casinosCTAbuttons: () => $$('#relatedCasinos div button'),
      hitsAndMissesComponentValues: () => $$('[data-aid="casinoComponentHitsMisses"] span[class*="item"]'),
      reviewLinks: () => $$('[data-aid="casinoReviewLink"]'),
      reviewCtaLinks: () => $$('[data-aid="casinoCtaReviewLink"]'),
    },
    blocksTitles: () => $$(':not([id="relatedCasinos"])>h2[id]'),
  };
  
  slotsPage = {
    ratingValue: () => $('main>div>div>div'),
  };
  
  generalSelectors = {
    sectionHeading: () => $$(':not([id*="critical-css"]) section h2'),
    showMoreButton: () => $$('span[class*="load-more"]'),
    ratingValueStars: () => $$('span[style*="width"]'),
  };
  
  casinosConstructorBlock = {
    casinosSection: () => $('[id="casinos"]').parentElement(),
    cardsOnPage: () => $$('section>div>div>div'),
    cardsWithAdditionaContainerSkinIssue: () => $$('section>div>div>div>div'),
    cardsWithAdditionalBoxSkinIssue: () => $$('section>div>div>div>div>div'),
    casinosTitle: () => $('[id="casinos"]'),
  };
  
  linkingCardsConstructorBlock = {
    linkingCardsSection: () => $('#linking_cards +div'),
    imagesInLinkingCards: () => $$('section>div>div>div img'),
    cardsTitles: () => $$('section>div>div>div p'),
    linkingCardsTitle: () => $('[id="linking_cards"]'),
  };
  
  tagsConstructorBlock = {
    tags: () => $$('section div a'),
    tagsHeading: () => $('[id="tags"]')
  };
  
  contentConstructorBlock = {
    contentBlock: (textToContain) => $(`//*[contains(text(), "${textToContain}")]`),
    imageInContentBlock: () => $('section img'),
  };
  
  slotsConstructorBlock = {
    slotsImages: () => $$('div[style*="background-image"]'),
    slotTitles: () => $$('div[style*="background-image"] + div>p'),
    slotsSTAbuttons: () => $$('div[style*="background-image"] + div>a'),
    slotsCategoryImages: () => $$('div img[class*="attachment"]'),
    numerationInSlotCategoryCards: () => $$('div[class*="pseudo-link"]>span'),
    slotNamesInSlotCategoryCards: () => $$('div[class*="pseudo-link"]>div:nth-child(2)>span'),
    slotRatingInSlotCategoryCards: () => $$('span[class="table-rating"]'),
    slotsCategorySTAbuttons: () => $$('a[class*="table-button"]'),
    columnComponentsTitlesOrValuesInSlotsCards: (component, titleOrValueIndex) => $$(`[class*="data-wrapper-${component}"] div:nth-child(${titleOrValueIndex})`),
    ratingValueSelector: () => $$('.table-rating div[style*="width"]'),
    ratingValueForOtherDomains: () => $$('span[style*="width"]'),
    slotsHeading: () => $('[id="slots"]'),
  };
  
  paymentsConstructorBlock = {
    paymentsImages: () => $$('section div>img'),
    reviewButtonInPayments: () => $$('section div a[class*="btn"]'),
    paymentsTitles: () => $$('section div>p'),
    paymentDescription: () => $$('section div>div>div>div>div:nth-child(2)'),
    paymentsHeading: () => $('[id="payments"]')
  };
  
  tableOfContentsConstructorBlock = {
    itemsInList: () => $$('[class*="table_list_heading"]>ul>li>a'),
    subItemsInList: () => $$('[class*="table_list_heading"]>ul ul li a'),
    headingInTableOfContents: () => $('div[class*="table_title"]'),
    tableOfContentBlock: () => $('[class*="table_list_heading"]'),
  };
  
  referralLinkConstructorBlock = {
    referralButton: () => $('button[class*="play"]'),
    referralImage: () => $('section img[src*="uploads"]'),
  };
  
  providersConstructorBlock = {
    providersCards: () => $$('div[class*="providers-items-wrapper"] a'),
    imagesInProvidersCards: () => $$('div[class*="providers-items-wrapper"] a img'),
    providersTitle: () => $('[id="providers"]'),
  };
  
  faqConstructorBlock = {
    faqBlocks: () => $$('[class*="faq-block"]'),
    faqQuestions: () => $$('[class*="faq-block"] [class*="faq-question"] dt'),
    faqAnswers: () => $$('[class*="faq-block"] [class*="faq-answer"]'),
    faqHeading: () => $('[id="faq"]')
  };
  
  authorConstructorBlock = {
    authorImage: () => $('section div>img'),
    authorHeading: () => $('[id="author"]')
  };
  
  slotsCategoryConstructorBlock = {
    slotsCategoryHeader: () => $('[data-order="13"]')
  };
  
  homepage = {
    widgetsTitle: () => $$('.widget-header span'),
  };
  
  userReviewForm = {
    formTitle: () => $('#user-review-form>div'),
    userReviewForm: () => $('#user-review-form'),
    yourNameInput: () => $('input[name="name"]'),
    yourEmailInput: () => $('input[name="email"]'),
    describeYourExperienceInput: () => $('textarea[name="review"]'),
    prosInput: () => $('input[name="pros[]"]'),
    consInput: () => $('input[name="cons[]"]'),
    agreeCheckbox: () => $('.checkbox__mark'),
    submitButton: () => $('button[type="submit"]'),
    ratingStars: () => $$('label[class*="user-review-form__star"]'),
    popupWindow: () => $('.modal-custom'),
    closeButtonInPopupWindow: () => $('.modal-custom button:not([class*="custom"])'),
    crossCloseButtonInPopupWindow: () => $('.modal-custom button[class*="custom"]'),
    placeholders: () => $$('[placeholder]'),
    charactersCounter: () => $('.user-review-form__counter'),
    minMaxCounter: () => $('.user-review-form__row>span:not([class*="counter"])'),
    iDeclareText: () => $('.checkbox__label'),
    modalPopupTitle: () => $('.modal-custom__content>div>div'),
    informationTextInPopUpWindow: () => $('.modal-custom__content>div>p'),
  };
}
export default new FrontPage();
      