class FrontPage {
  casinoPage = {
    // eslint-disable-next-line indent
    casinoBlocksFromNotAvailablePopup: () => $$('.modal-content div:not(.wcp-bonus-offers__list) > div[class*="js-referral"'),
    casinoNamesFromRelatedCasinosSection: () => $$('#relatedCasinos div[class*="js-referral"]>p'),
    lastUpdateDate: () => $$('h1+div div'),
    apiFieldsTitles: () => $$('[class*="api-info-main"] div div div:nth-child(1)'),
    itemsInSupportBlock: () => $$('[class*="api-info-main"] ~ div:nth-child(2)>div>div'),
    showMoreButtonInProvidersBlock: () => $('[class*="js-providers-loader"]'),
    providersCards: () => $$('[class*="js-providers-info-items"] div'),
    readMoreButtonInContentBlock: () => $('[data-default="Read more"]'),
    relatedCasinosBlock: () => $('[class*="js-related-casinos"]'),
    stickySTAbar: () => $('[class*="js-nav-info"]'),
    ratingValuesInRatingBlock: () => $$('#user-reviews + div span[style*="width"]'),
    currentRatingInRatingBlock: () => $('#user-reviews + div>div:nth-child(1) span:nth-child(1)'),
    maxRatingValueInRatingBLock: () => $('#user-reviews + div>div:nth-child(1) span:nth-child(2)'),
    screenShotsCarousel: () => $('div[class*="carousel"]'),
    descriptionInScreenshotBlock: () => $('.gallery-description'),
    nextArrowInScreenshotsCarousel: () => $('.owl-nav button[class*="next"]'),
    previousArrowInScreenshotsCarousel: () => $('.owl-nav button[class*="prev"]'),
    owlNavigationDotsInScreenshotsBlock: () => $$('.owl-dots button'),
    imagesInScreenshotCarousel: () => $$('[class*="owl-item"]:not([class*="cloned"])'),
    withdrawalLimitsPreviousBlock: () => $('[class*="js-providers-info-items"]'),
    withdrawalLimitsItemsInBlock: () => 'div:nth-child(2) div div:nth-child(2)',
    paymentsCardsInPaymentsBlock: () => 'div:nth-child(2) div',
  };
  
  slotsPage = {
    ratingValue: () => $('main>div>div>div'),
    ratingValueForOtherDomains: () => $$('span[style*="width"]')[0],
  };
  
  generalSelectors = {
    sectionHeading: () => $$(':not([id*="critical-css"]) section h2'),
    showMoreButton: () => $$('span[class*="load-more"]'),
  };
  
  casinosConstructorBlock = {
    casinosSection: () => $('[id="casinos"]').parentElement(),
    cardsOnPage: () => $$('section>div>div>div'),
    cardsWithAdditionaContainerSkinIssue: () => $$('section>div>div>div>div'),
    cardsWithAdditionalBoxSkinIssue: () => $$('section>div>div>div>div>div'),
  };
  
  linkingCardsConstructorBlock = {
    linkingCardsSection: () => $('#linking_cards +div'),
    imagesInLinkingCards: () => $$('section>div>div>div img'),
    cardsTitles: () => $$('section>div>div>div p'),
  };
  
  tagsConstructorBlock = {
    tags: () => $$('section div a'),
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
  };
  
  paymentsConstructorBlock = {
    paymentsImages: () => $$('section div>img'),
    reviewButtonInPayments: () => $$('section div a[class*="btn"]'),
    paymentsTitles: () => $$('section div>p'),
    paymentDescription: () => $$('section div>div>div>div>div:nth-child(2)'),
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
  };
  
  faqConstructorBlock = {
    faqBlocks: () => $$('[class*="faq-block"]'),
    faqQuestions: () => $$('[class*="faq-block"] [class*="faq-question"] dt'),
    faqAnswers: () => $$('[class*="faq-block"] [class*="faq-answer"]'),
  };
  
  authorConstructorBlock = {
    authorImage: () => $('section div>img'),
  };
  
  homepage = {
    widgetsTitle: () => $$('.widget-header span'),
  };
}
export default new FrontPage();
  