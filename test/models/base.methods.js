/* global baseUrl */
/* eslint-disable camelcase */
const chai = require('chai');
const chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

import testData from '../helpers/test-data';
import CasinoTableSection from '../pageobjects/casino-table-section';
import PaginationSection from '../pageobjects/pagination.section';
import UnicodeDetectorSelectors from '../pageobjects/unicode-detector.selectors';

export const checkAttributeText = async (tag) => {
  const tagToCheck = await tag;
  // TODO: check the line below. Dont know why but elements with length 1 return as el with length undefined
  if (tagToCheck.length === undefined) {
    const tagText = await tag.getText();
    await expect(tagText).not.toBe('' || null);  
  } else if (tagToCheck.length > 1) {
    tagToCheck.forEach(async el => {
      const tagText = await el.getText();
      await expect(tagText).not.toBe('' || null); 
    }); 
  } else if (tagToCheck.length < 1) {
    await expect(tagToCheck).not.toBeExisting();
    console.log('There are no tags');
  }
};

export const checkPaginationAfterChangingPage = async (page) => {
  await expect(PaginationSection.currentPageNumber).toHaveText(page);
  await expect(PaginationSection.currentPageNumber).not.toHaveAttr(testData.attributes.href);
  await expect(browser).toHaveUrlContaining(`page/${page}/`);
};

const parseUrl = (url) => {
  let id = url.split('&')[0];
  id = id.split('?').pop();
  const location = url.split('&')[1];
  const element = url.split('&')[3];
  const casino_name = url.split('&')[4];
  const position = url.split('&')[5];
  const urlParams = [id, location, element, position];
  return [urlParams, casino_name];
};

export const checkArrays = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length)
    return false;
  for (let i=0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i])
      return false;
  }
  return true;
};

export const checkUrlParams = async (elemToClick, urlParams) => {
  await elemToClick.scrollIntoView({block: 'center'});
  await expect(elemToClick).toBeClickable();
  await elemToClick.moveTo({ xOffset: 10, yOffset: 10 });
  await elemToClick.click();

  const windowHandles = await browser.getWindowHandles();
  await browser.switchToWindow(windowHandles[1]);
  const url = await browser.getUrl();
  const urlFromBrowser = parseUrl(url);

  const checkArray = checkArrays(urlParams, urlFromBrowser[0]);
  expect(checkArray).toBe(true);
  expect(urlFromBrowser[1].length).toBeGreaterThan(15);
};

export const checkThatImageIsNotBroken = async (image) => {
  const width = await image.getSize(testData.imageParams.width);
  const height = await image.getSize(testData.imageParams.height);
  expect(width).toBeGreaterThan(0);
  expect(height).toBeGreaterThan(0);
};

export const checkImgAttributes = async (image) => {
  const altArrt = await image.getAttribute(testData.attributes.alt);
  await expect(altArrt).not.toBe(null || '');
  const srcAttr = await image.getAttribute(testData.attributes.src);
  await expect(srcAttr).not.toBe(null || '');
  const srcSetAttr = await image.getAttribute(testData.attributes.srcSet);
  await expect(srcSetAttr).not.toBe(null || '');
};

export const getAttributesNamesFromAttrKeeper = async () => {
  const attributes = [];
  const elemPosition1 = await CasinoTableSection.attributesKeeper.getAttribute(testData.attributes.dataPosition);
  const id1 = await CasinoTableSection.attributesKeeper.getAttribute(testData.attributes.dataID);
  const element1 = await CasinoTableSection.attributesKeeper.getAttribute(testData.attributes.dataElement);
  attributes.push(id1, element1, elemPosition1);
  return attributes;
};

export const getURLparams = async (elemToCheck) => {
  const urlParams = [];
  const attributes = await getAttributesNamesFromAttrKeeper();
  // eslint-disable-next-line
  await browser.pause(1000);
  const id = `id=${await elemToCheck.getAttribute(`data-${attributes[0]}`)}`;
  const location =  `location=${baseUrl}`;
  const element = `element=${await elemToCheck.getAttribute(`data-${attributes[1]}`)}`;
  const elemPosition = `position=${await elemToCheck.getAttribute(`data-${attributes[2]}`)}`;
  urlParams.push(id, location, element, elemPosition);
  return urlParams;
};

export const waitForElement = async (selector, time) => {
  try {
    await selector.waitForExist(time);
  } catch (error) {
    throw new Error(`Element ${selector} is not visible`);
  }
};

export const waitUntilUrlContainingText = async (value, seconds = 5) => {
  await browser.waitUntil(async () => await browser.getUrl() === value,
    { timeout: (seconds * 1000), timeoutMsg: `Url doesn't contain "${value}" after ${seconds} seconds of waiting.` });
};

export const checkUncheckedCheckbox = async (element) => {
  const checked = await element.isSelected();
  if (checked === false) {
    await element.click();
  }
};

export const checkSitemapData = async (pagesToCheck) => {
  await browser.url(`${baseUrl}sitemap_main.xml`);
  for (let index = 0; index < pagesToCheck.length; index++) {
    const siteData = await $('body').getText();
    await expect(siteData).toContain(pagesToCheck[index]);
  }
};

export const getArrayOfAttributeValues = async (element, attributeToGet) => {
  const array = [];
  for (let index = 0; index < await element.length; index++) {
    array.push(await element[index].getAttribute(attributeToGet));
  }
  return array;
};

export const getArrayOfTextValues = async (element) => {
  const array = [];
  for (let index = 0; index < await element.length; index++) {
    array.push(await element[index].getText());
  }
  return array;
};

export const checkPageOpenedWithOkStatus = async (page) => {
  const siteLink = await fetch(page);
  expect(siteLink.status).toBe(200);
};

export const getFirstLevelBreadcrumbName = async (page) => {
  await browser.url(`view-source:${page}`);
  const str = await $('body').getText();
  const startPos = str.indexOf('type="application/ld+json"');
  const endPos = str.indexOf('</script>', startPos);
  let text = str.substring(startPos, endPos);

  const startIndex = text.indexOf('BreadcrumbList');
  const endIndex = text.indexOf('}', startIndex) + 2;
  text = text.substring(startIndex, endIndex);   

  const startI = text.indexOf('"name"');
  const endI = text.lastIndexOf('"');
  text = text.substring(startI, endI + 1);   

  const startInd = text.indexOf('"', 2) + 1;
  const endInd = text.length - 1;
  const finalText = text.substring(startInd, endInd).replace(/"/g, '')
    .replace(/:/g, '')
    .trim();
  return finalText;
};

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

export const webPageScript = async (document) => {
  const jsonLDString = await browser.execute(() => {
    const jsonLDScripts = Array.from(document.querySelectorAll('script'))
      .filter(script => script.type === 'application/ld+json');
    if (!jsonLDScripts.length) 
      return 'No application/ld+json found';

    return JSON.stringify(jsonLDScripts.map(script => JSON.parse(script.innerHTML.replace(/“|”/g, '"'))));
  });
  return JSON.parse(jsonLDString);
};

export const checkCharactersInUnicodeDetector = async (valueToCheck, negative = 'no', replaceLettersArray) => {
  await UnicodeDetectorSelectors.textArea.clearValue();
  await UnicodeDetectorSelectors.textArea.setValue(valueToCheck);
  if (negative === 'no') {
    await expect(UnicodeDetectorSelectors.dangerCharacters).not.toExist();
    await expect(UnicodeDetectorSelectors.warningCharacters).not.toExist();  
  } else {
    await expect(UnicodeDetectorSelectors.dangerCharacters).toExist();
    const arrayWithDangerLetters = await getArrayOfTextValues(UnicodeDetectorSelectors.dangerCharacters);

    for (let index = 0; index < arrayWithDangerLetters.length; index++) {
      await expect(replaceLettersArray.includes(arrayWithDangerLetters[index])).toBeTruthy();
    }
  }
};

export const checkThatElemIsPresented = async (element) => {
  try {
    const elementSelector = await element;
    await browser.waitUntil(async () => {
      return await elementSelector.isExisting();
    }, { timeout: 5000, timeoutMsg: 'Element is not found' });
    const elementSelectorExists = await elementSelector.isExisting();
    return elementSelectorExists;
  } catch (error) {
    console.log('Element is not found');
    return;
  }
};

export const clickOnShowMoreButton = async () => {
  await CasinoTableSection.showMoreButton[0].scrollIntoView({block: 'center'});
  await browser.pause(3000);
  await CasinoTableSection.showMoreButton[0].click();
};
