/* global baseUrl */
/* eslint-disable camelcase */

import paginationSection from '../pageobjects/pagination.section';

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

export const getPageLinksByAddingEndpointsToBasePage = (endpointsArray, addBaseUrl = 'yes') => {
  let pagesToCheck = endpointsArray;
  pagesToCheck = pagesToCheck.map(i => baseUrl + i);
  if (addBaseUrl === 'yes') {
    pagesToCheck.push(baseUrl);
  }
  return pagesToCheck;
};

export const checkPaginationAfterChangingPage = async (page) => {
  await expect(paginationSection.currentPageNumber).toHaveText(page);
  await expect(paginationSection.currentPageNumber).not.toHaveAttr('href');
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

const checkArrays = (urlParams, urlFromBrowser) => {
  if(urlParams.length !== urlFromBrowser.length)
    return false;
  for(let i=0; i < urlParams.length; i++) {
    if(urlParams[i]!== urlFromBrowser[i])
      return false;
  }
  return true;
};

export const checkUrlParams = async (elemToClick, urlParams) => {
  await elemToClick.click();
  await browser.switchWindow('redirect - Casino-kit');
  const url = await browser.getUrl();
  const urlFromBrowser = await parseUrl(url);
  const checkArray = await checkArrays(urlParams, urlFromBrowser[0]);
  expect(checkArray).toBe(true);
  expect(urlFromBrowser[1].length).toBeGreaterThan(15);
};

export const checkThatImageIsNotBroken = async (image) => {
  const width = await image.getSize('width');
  const height = await image.getSize('height');
  expect(width).toBeGreaterThan(0);
  expect(height).toBeGreaterThan(0);
};

export const checkImgAttributes = async (image) => {
  const altArrt = await image.getAttribute('alt');
  await expect(altArrt).not.toBe(null || '');
  const srcAttr = await image.getAttribute('src');
  await expect(srcAttr).not.toBe(null || '');
  const srcSetAttr = await image.getAttribute('srcset');
  await expect(srcSetAttr).not.toBe(null || '');
};