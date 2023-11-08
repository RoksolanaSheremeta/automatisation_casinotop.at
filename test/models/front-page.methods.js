/* global baseUrl */
import SEOTags from '../pageobjects/SEO.tags';
import BaseSelectors from '../pageobjects/base.selectors';
import CasinoTableSection from '../pageobjects/casino-table-section';
import FrontPage from '../pageobjects/front-pages.selectors';
import {
  checkArrays,
  checkVariable,
  getArrayOfAttributeValues,
  getArrayOfTextValues,
  getAttributesNamesFromAttrKeeper,
  isElementVisible,
} from './base.methods';
import testData from '../helpers/test-data';

export const getDataLayerObjectAfterClick = async (elementToClick) => {
  await expect(elementToClick).toExist();
  await elementToClick.scrollIntoView({block: 'center'});
  await elementToClick.click();
  await browser.switchWindow(baseUrl);
  // eslint-disable-next-line
  const dataLayer = await browser.execute(() => window.dataLayer);
  const filteredData = dataLayer.filter((object) => object.event === 'GAevent');
  return filteredData;
};

export const checkDataLayerObject = async (elementToClick, eventAction, position) => {
  const data = await getDataLayerObjectAfterClick(elementToClick);
  const GAeventObject = {
    eventAction: eventAction,
    eventCategory: 'toCasino',
    position: position
  };

  expect(GAeventObject.eventCategory).toEqual(data[0].eventCategory);
  expect(GAeventObject.eventAction).toEqual(data[0].eventAction);
  expect(parseInt(GAeventObject.position)).toEqual(data[0].position);
};

export const clickOnShowMoreButton = async (showMoreButton = CasinoTableSection.showMoreButton[0]) => {
  // eslint-disable-next-line
  await browser.pause(2000);
  if (await showMoreButton) {
    while (await showMoreButton.isExisting() && await isElementVisible(showMoreButton)) {
      await showMoreButton.scrollIntoView({ block: 'center' });
      await showMoreButton.click();
    }
  }
};

export const getAllCasinosNamesFromTable = async (tableIndex) => {
  await clickOnShowMoreButton();
  let casinoNamesFromSite;
  const dataAttributes = await getAttributesNamesFromAttrKeeper();
  if (await CasinoTableSection.casinoConstructorSections[tableIndex].$$(CasinoTableSection.casinoNameInCard).length > 0) {
    const allCardNamesSelector = await CasinoTableSection.casinoConstructorSections[tableIndex].$$(CasinoTableSection.casinoNameInCard);
    const namesFromCards = await getArrayOfTextValues(allCardNamesSelector);
    const namesFromRows = await getArrayOfTextValues(CasinoTableSection.casinoConstructorSections[tableIndex].$$(CasinoTableSection.casinoNameInRow));
    casinoNamesFromSite = namesFromCards.concat(namesFromRows);
  } else {
    const namesFromCards = await getArrayOfAttributeValues(CasinoTableSection.casinoConstructorSections[tableIndex].$$(CasinoTableSection.cardOverlay), `data-${dataAttributes[3]}`);
    const namesFromRows = await getArrayOfAttributeValues(CasinoTableSection.casinoConstructorSections[tableIndex].$$(CasinoTableSection.rowOverlay), `data-${dataAttributes[3]}`);
    casinoNamesFromSite = namesFromCards.concat(namesFromRows);
  }
  return casinoNamesFromSite;
};

export const openPageAndCheckCasinoTitles = async (casinoNamesFromAdmin, tableIndex, pageLink, locale) => {
  await browser.url(`${pageLink}?test-country-code=${locale}`);
  await expect(CasinoTableSection.titlesInConstructorBlock).toBeDisplayed();
  await browser.pause(3000); //eslint-disable-line
  const casinoNamesFromSite = await getAllCasinosNamesFromTable(tableIndex);
  expect(checkArrays(casinoNamesFromAdmin, casinoNamesFromSite)).toBeTruthy();
};

export const openHiddenTableOfContents = async () => {
  await expect(FrontPage.tableOfContentsConstructorBlock.tableOfContentBlock()).toBeExisting();
  const isDisplayed = await FrontPage.tableOfContentsConstructorBlock.tableOfContentBlock().getAttribute('style');
  if (isDisplayed.includes('display: none')) {
    await FrontPage.tableOfContentsConstructorBlock.tableOfContentBlock().parentElement()
      .$('div[class*="table_title"]')
      .click();
  }
};

export const hideOpenedTableOFContents = async () => {
  let isDisplayed;
  await expect(FrontPage.tableOfContentsConstructorBlock.tableOfContentBlock()).toBeExisting();
  isDisplayed = await FrontPage.tableOfContentsConstructorBlock.tableOfContentBlock().getAttribute('style');
  if (!isDisplayed.includes('display: none')) {
    await FrontPage.tableOfContentsConstructorBlock.tableOfContentBlock().parentElement()
      .$('div[class*="table_title"]')
      .click();
  }
  isDisplayed = await FrontPage.tableOfContentsConstructorBlock.tableOfContentBlock().getAttribute('style');
  expect(isDisplayed).toContain('hidden');
};

export const checkNavigationToSection = async (index) => {
  const itemText = await FrontPage.tableOfContentsConstructorBlock.itemsInList()[index].getText();
  await FrontPage.tableOfContentsConstructorBlock.itemsInList()[index].moveTo();
  await FrontPage.tableOfContentsConstructorBlock.itemsInList()[index].click();
  let visibleTitleText = null;
  await browser.pause(1000); // eslint-disable-line
  // Searching for the first visible title below
  for (const title of await FrontPage.generalSelectors.sectionHeading()) {
    if (await title.isDisplayedInViewport()) {
      visibleTitleText = await title.getText();
      break;
    }
  }
  expect(visibleTitleText).toEqual(itemText);
  await BaseSelectors.scrollToTopButton.click();
  await browser.pause(1000); // eslint-disable-line
};

export const checkTableOfContentsTypeStyle = async (index, type) => {
  const numeration = await browser.execute((index) => {
    const listItems = document.querySelectorAll('[class*="table_list_heading"] li'); // eslint-disable-line
    const listItem = listItems.item(index);
    const beforeContent = window.getComputedStyle(listItem, '::before').getPropertyValue('content'); // eslint-disable-line
    return beforeContent;
  }, index);
  expect(numeration).toContain(type);
};

export const checkExcludedHeadingsInTableOfContents = async (selectedHeadings, selectedLayouts) => {
  const headingsMap = {
    'h1': await getArrayOfTextValues(SEOTags.h1Tag),
    'h2': await getArrayOfTextValues(SEOTags.h2Tag),
    'h3': await getArrayOfTextValues(SEOTags.h3Tag),
    'h4': await getArrayOfTextValues(SEOTags.h4Tag),
    'h5': await getArrayOfTextValues(SEOTags.h5Tag),
    'h6': await getArrayOfTextValues(SEOTags.h6Tag),
  };

  const tableOfContentsItems = await FrontPage.tableOfContentsConstructorBlock.itemsInList();
  const tableOfContentsSubItems = await FrontPage.tableOfContentsConstructorBlock.subItemsInList();

  for (const headingType of selectedHeadings) {
    const allHeadingsOnPage = headingsMap[headingType];
    if (allHeadingsOnPage.length > 0) {
      for (const item of tableOfContentsItems) {
        expect(await item.getText()).not.toEqual(allHeadingsOnPage);
      }
      for (const subItem of tableOfContentsSubItems) {
        expect(await subItem.getText()).not.toEqual(allHeadingsOnPage);
      }
    }
  }

  const excludedHeadingsFromAdmin = {
    content: 'Content',
    casinos: 'Casinos',
    slots: 'Slots',
    linkingCards: 'Linking Cards',
    payments: 'Payments',
    faq: 'F.A.Q',
    author: 'Author',
    tags: 'Tags',
    providers: 'Providers',
    slotsCategory: 'Slots category',
  };

  const blockTitlesOnFrontPage = {
    casinos: testData.constructorBlocks.casinos,
    slots: testData.constructorBlocks.slots,
    linkingCards: testData.constructorBlocks.linking_cards,
    payments: testData.constructorBlocks.payments,
    faq: testData.constructorBlocks.faq,
    author: testData.constructorBlocks.author,
    tags: testData.constructorBlocks.tags,
    providers: testData.constructorBlocks.providers,
    slotsCategory: testData.constructorBlocks.slots_category,
  };

  for (let index = 0; index < selectedLayouts.length; index++) {
    const excludedHeadingsValues = Object.values(excludedHeadingsFromAdmin);
    if (excludedHeadingsValues.includes(selectedLayouts[index])) {
      if (selectedLayouts[index] === 'Content') {
        expect(await tableOfContentsSubItems.length).toBe(0);
      } else {
        const blockTitleKey = selectedLayouts[index].toLowerCase();
        const blockTitle = blockTitlesOnFrontPage[blockTitleKey];
        for (const item of tableOfContentsItems) {
          expect(await item.getText()).not.toEqual(blockTitle);       
        }
      }
    }
  }
};

export const checkImagesInBlock = async (imagesSelector, expectedCountOfImages) => {
  const allImages = await imagesSelector;
  expect(await allImages.length).toEqual(expectedCountOfImages);
  const arrayWithBrokenImages = [];
  for (let index = 0; index < await allImages.length; index++) {
    const altAttribute = await allImages[index].getAttribute(testData.attributes.alt);
    await checkVariable(altAttribute);

    const height = await allImages[index].getSize(testData.imageParams.height);
    if (height === 0) {
      arrayWithBrokenImages.push('Image height is 0 for some cards');
    } else {
      expect(height).toBeGreaterThan(0);
    }
  }
};

export const checkScreenshotsCarouselOnReviewPage = async () => {
  // checking clicking on dots
  const screenshotsDots = await FrontPage.casinoPage.owlNavigationDotsInScreenshotsBlock();
  const screenshotImages = await FrontPage.casinoPage.imagesInScreenshotCarousel();
  const visibleImageCount = 3;

  for (let index = 0; index < screenshotsDots.length; index++) {
    const dot = screenshotsDots[index];
    await dot.scrollIntoView({ block: 'center' });
    await dot.click();
  
    for (let i = 0; i < screenshotImages.length; i++) {
      if (i >= index && i < index + visibleImageCount) {
        await expect(screenshotImages[i]).toHaveElementClassContaining('active');
      } else {
        await expect(screenshotImages[i]).not.toHaveElementClassContaining('active');
      }
    }
  }

  // checking arrows below
  await browser.refresh();

  const imagesInCarousel = await FrontPage.casinoPage.imagesInScreenshotCarousel();
  const imagesPerView = 3;
  const totalImages = imagesInCarousel.length;
  
  for (let clickCount = 0; clickCount < totalImages; clickCount++) {
    await FrontPage.casinoPage.nextArrowInScreenshotsCarousel().click();
  
    for (let index = 0; index < totalImages; index++) {          
      const isLastClick = clickCount === totalImages - 1;
      const isFirstThree = (isLastClick && index <= 2);
      
      const isActive = isFirstThree || (!isLastClick && index >= clickCount + 1 && index < clickCount + 1 + imagesPerView);
  
      if (isActive) {
        await expect(imagesInCarousel[index]).toHaveElementClassContaining('active');
      } else {
        await expect(imagesInCarousel[index]).not.toHaveElementClassContaining('active');
      }
    }
  }
};