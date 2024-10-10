/* global baseUrl */
/* eslint-disable camelcase */
import fetch from 'node-fetch';
import CheckVersionSelectors from '../pageobjects/check-version.selectors';
import testData from '../helpers/test-data';
import CasinoTableSection from '../pageobjects/casino-table-section';
import UnicodeDetectorSelectors from '../pageobjects/unicode-detector.selectors';
import BaseSelectors from '../pageobjects/base.selectors';
import FrontPage from '../pageobjects/front-pages.selectors';
const chai = require('chai');
const chaiWebdriver = require('chai-webdriverio').default;
chai.use(chaiWebdriver(browser));

export const visitMainPageByUrl = async () => {
  await browser.url(baseUrl);
  if (! await FrontPage.footer.footerBlock().isExisting()) {
    await browser.url(`https://testcasinos.org/`);
  }
};
// exports.config = {
//   baseUrl: 'https://testcasinos.org/', // Тут вказуємо базовий URL
// };

export const checkAttributeText = async (tag) => {
  const tagToCheck = await tag;
  if (tagToCheck.length === undefined) {
    const tagText = await tag.getText();
    expect(tagText !== '' || tagText !== null).toBe(true);
  } else if (tagToCheck.length >= 1) {
    tagToCheck.forEach(async el => {
      const tagText = await el.getText();
      expect(tagText !== '' || tagText !== null).toBe(true);
    }); 
  } else if (tagToCheck.length < 1) {
    expect(tagToCheck).not.toBeExisting();
    console.log('There are no tags');
  }
};

export const checkPaginationAfterChangingPage = async (page) => {
  await expect(FrontPage.pagination.currentPageNumber()).toHaveText(page);
  await expect(FrontPage.pagination.currentPageNumber()).not.toHaveAttr(testData.attributes.href);
  await expect(browser).toHaveUrlContaining(`page/${page}/`);
};

export const checkArrays = (firstArray, secondArray) => {
  let result = false;
  if (firstArray.length !== secondArray.length) {
    result = false;
  } else {
    for (let i=0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        result = false; 
        break;
      } else {
        result = true;
      }
    }
  }
  return result;
};

export const checkUrlParams = async (elemToClick, paramsToCheck, projectVersion = 5.3, pageType = 'page', elementType = 'logo') => {
  if (elementType === 'button' || elementType === 'logo' || baseUrl.includes('casino-kit') || baseUrl.includes('casinosfellow.com')) {
    await elemToClick.scrollIntoView({block: 'center'});
    await elemToClick.click();
  } else {
    const { x, y } = await elemToClick.getLocation();
    const xLocation = Math.floor(x);
    const yLocation = Math.floor(y);
    await elemToClick.scrollIntoView({block: 'center'});
    await elemToClick.click({ xLocation, yLocation });
  }
  await switchBrowserWindow(1);
  const redirectedUrl = await browser.getUrl();

  expect(redirectedUrl).toContain(`id=${paramsToCheck.casinoID}`);
  expect(redirectedUrl).toContain(`location=${paramsToCheck.currentUrl}`);
  expect(redirectedUrl).toContain(`element=${paramsToCheck.element}`);
  if (pageType === 'page') {
    expect(redirectedUrl).toContain(`position=${paramsToCheck.position}`);
  }
  expect(redirectedUrl).toContain('position=');
  expect(redirectedUrl).toContain('cid=');
  if (projectVersion >= 5.4) {
    expect(redirectedUrl).toContain('geo=');
    expect(redirectedUrl).toContain('session_id=');
  }

  const nameStart = redirectedUrl.indexOf('casino_name=') + 12; 
  const nameEnd = redirectedUrl.indexOf('&', nameStart);
  const casinoNameFromUrl = redirectedUrl.substring(nameStart, nameEnd);
  const decodedName = decodeURIComponent(casinoNameFromUrl);
  expect(decodedName.toLocaleLowerCase()).toContain(paramsToCheck.casinoName.toLocaleLowerCase());

  await closeSecondBrowserTab();
};

export const checkThatImageIsNotBroken = async (image) => {
  const width = await image.getSize(testData.imageParams.width);
  const height = await image.getSize(testData.imageParams.height);
  expect(width).toBeGreaterThan(0);
  expect(height).toBeGreaterThan(0);
};

export const checkImgAttributes = async (image) => {
  const altAttr = await image.getAttribute(testData.attributes.alt);
  await checkVariable(altAttr);
  const srcAttr = await image.getAttribute(testData.attributes.src);
  await checkVariable(srcAttr);
  const srcSetAttr = await image.getAttribute(testData.attributes.srcSet);
  await checkVariable(srcSetAttr);
};

export const getAttributesNamesFromAttrKeeper = async () => {
  const attributes = [];
  await waitForElement(CasinoTableSection.attributesKeeper);
  const elemPosition1 = await CasinoTableSection.attributesKeeper.getAttribute(testData.attributes.dataPosition);
  const id1 = await CasinoTableSection.attributesKeeper.getAttribute(testData.attributes.dataID);
  const element1 = await CasinoTableSection.attributesKeeper.getAttribute(testData.attributes.dataElement);
  const casinoName = await CasinoTableSection.attributesKeeper.getAttribute(testData.attributes.name);
  const geo = await CasinoTableSection.attributesKeeper.getAttribute(testData.attributes.geo);
  attributes.push(id1, element1, elemPosition1, casinoName, geo);
  return attributes;
};

export const getURLparams = async (elemToCheck, geoTest = 'yes') => {
  const urlParams = [];
  const attributes = await getAttributesNamesFromAttrKeeper();
  let geoParameter;
  // eslint-disable-next-line
  await browser.pause(1000);
  const id = await elemToCheck.getAttribute(`data-${attributes[0]}`);
  const location = baseUrl;
  const element = await elemToCheck.getAttribute(`data-${attributes[1]}`);
  const elemPosition = await elemToCheck.getAttribute(`data-${attributes[2]}`);
  const casinoName = await elemToCheck.getAttribute(`data-${attributes[3]}`);

  if (geoTest === 'yes') {
    geoParameter = `geo=${await elemToCheck.getAttribute(`data-${attributes[4]}`)}`;
    urlParams.push(id, location, element, elemPosition, casinoName, geoParameter.toLocaleLowerCase());
  } else {
    urlParams.push(id, location, element, elemPosition, casinoName);
  }
  return urlParams;
};

export const waitForElement = async (selector, seconds = 110) => {
  try {
    await selector.waitForExist({ timeout: seconds * 1000 });
  } catch (error) {
    throw new Error(`Element does not exist after ${seconds} seconds of waiting`);
  }
};

export const waitUntilUrlContainingText = async (value, seconds = 5) => {
  await browser.waitUntil(async () => await browser.getUrl() === value,
    { timeout: (seconds * 1000), timeoutMsg: `Url doesn't contain "${value}" after ${seconds} seconds of waiting.` });
};

export const checkUncheckedCheckbox = async (element) => {
  const checked = await element.isSelected();
  if (!checked) {
    await waitScrollAndClick(element);
  }
};

export const checkSitemapData = async (pagesToCheck) => {
  await browser.url(`${baseUrl}sitemap_main.xml`);
  for (let index = 0; index < pagesToCheck.length; index++) {
    const siteData = await BaseSelectors.body.getText();
    await expect(siteData).toContain(pagesToCheck[index]);
  }
};

export const getArrayOfAttributeValues = async (element, attributeToGet) => {
  const array = [];
  for (let index = 0; index < await element.length; index++) {
    const attributeValue = await element[index].getAttribute(attributeToGet);
    if (attributeValue) {
      array.push(attributeValue);
    } else {
      console.log(`Attribute "${attributeToGet}" is absent for this element`);
    }
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
  await browser.url(page);
  const siteLink = await fetch(page);
  expect(siteLink.status).toBe(200);
};

export const getFirstLevelBreadcrumbName = async (page) => {
  await browser.url(`view-source:${page}`);
  const str = await BaseSelectors.body.getText();
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
  const specialSymbols = [
    'õ', 'á', 'č', 'ď', 'é', 'ě', 'í', 'ň', 'ó', 'ř', 'š', 'ť', 'ú', 'ů', 'ý', 'ž', 'ă', 'â', 'î', 'ș', 'ț', 'č', 'š', 'ž',
    'Õ', 'Á', 'Č', 'Ď', 'É', 'Ě', 'Í', 'Ň', 'Ó', 'Ř', 'Š', 'Ť', 'Ú', 'Ů', 'Ý', 'Ž', 'Ă', 'Â', 'Î', 'Ș', 'Ț', 'Č', 'Š', 'Ž'
  ];

  await UnicodeDetectorSelectors.textArea.clearValue();
  await UnicodeDetectorSelectors.textArea.setValue(valueToCheck);
  if (negative === 'no') {
    if (UnicodeDetectorSelectors.dangerCharacters.isExisting()) {
      const arrayWithDangerLetters = await getArrayOfTextValues(UnicodeDetectorSelectors.dangerCharacters);
      const allMatch = arrayWithDangerLetters.every(letter => specialSymbols.includes(letter));
      expect(allMatch).toBeTruthy();
    } else {
      await expect(UnicodeDetectorSelectors.dangerCharacters).not.toExist();
      await expect(UnicodeDetectorSelectors.warningCharacters).not.toExist();  
    }
  } else {
    await expect(UnicodeDetectorSelectors.dangerCharacters).toExist();
    const arrayWithDangerLetters = await getArrayOfTextValues(UnicodeDetectorSelectors.dangerCharacters);
    const mergedArraysWithSpecialSymbols = replaceLettersArray.concat(specialSymbols);
    
    for (let index = 0; index < arrayWithDangerLetters.length; index++) {
      expect(mergedArraysWithSpecialSymbols.includes(arrayWithDangerLetters[index])).toBeTruthy();
    }  
  }
};

export const isElementVisible = async (element) => {
  const isVisible = await element.isDisplayed();
  const opacity = await element.getCSSProperty('opacity');
  return (isVisible && opacity !== 0);
};

export const scrollAndClick = async (element) => {
  await expect(element).toBeExisting();
  await element.scrollIntoView({block: 'center'});
  await element.click();
};

export const checkVariable = async (variable) => {
  expect(variable).not.toBeNull();
  expect(variable).not.toBeUndefined();
  expect(variable).not.toBe('');
};

export const waitForDisplayed = async (element, timeout = 5000) => {
  await browser.waitUntil(async () => {
    return (await element.isDisplayed());
  },
  { timeout: timeout,
    timeoutMsg: `Element is not displayed after ${timeout} of waiting`,
    interval: 500 });
};

export const waitForValue = async (element, valueToCheck) => {
  await browser.waitUntil(async () => {
    const value = await element.getValue();
    return value.includes(valueToCheck);
  }, {
    timeout: 5000,
    interval: 500,
  });
};

export const waitForHaveAttributeValue = async (element, attribute, value) => {
  await browser.waitUntil(async () => {
    const attributeToCheck = await element.getAttribute(attribute);
    return attributeToCheck.includes(value);
  }, {
    timeout: 5000,
    interval: 500,
  });
};

export const moveSwitcher = async (switcherSelector, onOrOff) => {
  await switcherSelector.scrollIntoView();
  const switcherStatus = await switcherSelector.getAttribute('class');
  if (onOrOff === 'on') {
    if (!switcherStatus.includes('-on')) {
      await switcherSelector.$('div')
        .click();
      expect(await switcherSelector.getAttribute('class')).toContain('-on');
    }
  } else if (onOrOff === 'off') {
    if (switcherStatus.includes('-on')) {
      await switcherSelector.$('div')
        .click();
      expect(await switcherSelector.getAttribute('class')).not.toContain('-on');
    }  
  }
};

export const getProjectVersion = async () => {
  let version;
  await browser.url(`https://www-data:azimjArnyLy89=@${baseUrl.slice(8)}${testData.endpoints.styleCss}`);
  const allText = await $('body').getText();
  if (allText === '' || allText.includes('404')) { // checking via check-casino-kit-version.prokit.me service in this case
    if (baseUrl.includes('casino-kit-prod.site')) {
      version = 6.0; // version should be updated in according to actual version of casino-kit
    } else if (baseUrl.includes('prokit.me')) {
      version = 6.0; // version should be updated manually with actual one for dev environment
    } else {
      await browser.url(testData.checkingVersionUrl);
      const domain = await CheckVersionSelectors.domainName(baseUrl.slice(8, -1)).isExisting();
      if (!domain) { 
        console.log(`!!!!!!! ${baseUrl.slice(8, -1)} is not present in service, please check this test manually !!!!!!!`);
      } else {
        const versionString = await CheckVersionSelectors.domainVersion(baseUrl.slice(8, -1)).getText();
        version = parseFloat(versionString);
      }
    }
  } else { // checking project version via style css file
    const lines = allText.split('\n');

    for (const line of lines) {
      if (line.startsWith('Version:')) {
        version = line.split(' ')[1];
        break;
      }
    }
    const versionArray = version.split('.');
    versionArray.pop();
    version = parseFloat(versionArray.join('.'));
  }
  return version;
};

export const closeSecondBrowserTab = async () => {
  const windowHandles = await browser.getWindowHandles();
  if (windowHandles.length > 1) { // checking here if is opened more than 1 tab on browser, if yes we close the current (after redirect opens other tab)
    await browser.closeWindow();
  }
  await browser.switchToWindow(windowHandles[0]);
};

export const switchBrowserWindow = async (windowIndex) => {
  const windowHandles = await browser.getWindowHandles();
  await browser.switchToWindow(windowHandles[windowIndex]);
};

export const closeAllBrowserTabsAndReturnToFirstOne = async () => {
  const windowHandles = await browser.getWindowHandles();
  for (let i = 1; i < windowHandles.length; i++) {
    await browser.switchToWindow(windowHandles[i]);
    await browser.closeWindow();
  }
  await browser.switchToWindow(windowHandles[0]);
  await browser.refresh();
};

export const waitScrollAndClick = async (element, pause = 500) => {
  await browser.pause(pause); // eslint-disable-line
  await element.scrollIntoView();
  await element.click();
};

export const checkThatImageDoesntGoOutBoxLayout = async (imageSelector, containerSelector) => {
  const width = await imageSelector.getSize(testData.imageParams.width);
  const height = await imageSelector.getSize(testData.imageParams.height);

  const containerWidth = await containerSelector.getSize(testData.imageParams.width);
  const containerHeight = await containerSelector.getSize(testData.imageParams.height);

  expect(width).not.toBeGreaterThan(containerWidth);
  expect(height).not.toBeGreaterThan(containerHeight);
};

export const checkNumberType = async (value) => {
  const parts = value.split('.');
  
  switch (parts.length) {
  case 2:
    if (parts[1].length === 1) {
      return 'decimal1';
    } else if (parts[1].length === 2) {
      return 'decimal2';
    }
    break;
  case 1:
    if (!isNaN(Number(parts[0]))) {
      return 'integer';
    }
    break;
  }
  return 'unknown number type';
};

export const openUrlWithEndpointForSelectors = async () => {
  const currentUrl = await browser.getUrl();
  const url = currentUrl + testData.endpoints.getParamForSelectors;
  await browser.url(url);
};

export const checkElementsAreNotOverlapping = async (elementA, elementB) => {
  let result;
  const locationA = await elementA.getLocation();
  const sizeA = await elementA.getSize();
  
  const locationB = await elementB.getLocation();
  const sizeB = await elementB.getSize();

  const isNotOverlapping = !(
    locationA.x + sizeA.width <= locationB.x ||
    locationB.x + sizeB.width <= locationA.x ||
    locationA.y + sizeA.height <= locationB.y ||
    locationB.y + sizeB.height <= locationA.y
  );

  if (isNotOverlapping) {
    console.log('Elements overlap each other');
    result = false;
  } else {
    console.log('Elements do not overlap each other');
    result = true;
  }
  return result;
};

export const smoothScroll = async () => {
  const documentHeight = await browser.execute(() => document.documentElement.scrollHeight); // eslint-disable-line
  const smoothScrollDuration = 1000; // time of animation in miliseconds
  const frames = 60; // count of frames 
  const scrollStep = documentHeight / frames; // step for scrolling on each frame
  // slowly scroll
  for (let i = 0; i < frames; i++) {
    await browser.execute((scrollStep, i) => {
      window.scrollTo(0, scrollStep * i); // eslint-disable-line
    }, scrollStep, i);
    // wait between frames
    await browser.pause(smoothScrollDuration / frames); // eslint-disable-line
  }
};

export const checkConsoleErrors = async () => {
  if (baseUrl.includes('casino-kit-prod.site')) {
    console.log('Console errors wont be checked on casino kit environment');
  } else {
    const logType = 'browser';
    const logsAfterCreating = await browser.getLogs(logType);
    if (logsAfterCreating.length > 0) {
      console.error(`!!!!! Errors are found in dev console (${logType}): !!!!!`);
      for (let index = 0; index < logsAfterCreating.length; index++) {
        console.error(`<<<<<<< Error ${index} : ${logsAfterCreating[index].message} >>>>>>>`);
      }
    } else {
      console.log(`Errors in dev console (${logType}) are not found.`);
    }
  }
};
