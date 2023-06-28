import testData from '../helpers/test-data';
import AdminDashboard from '../pageobjects/admin-dashboard.selectors';
import BaseSelectors from '../pageobjects/base.selectors';
import PolylangPage from '../pageobjects/polylang.page';
import { openSubmenuTab } from './admin.methods';
import { getArrayOfAttributeValues } from './base.methods';
/* global baseUrl */

export const checkPluginActivation = async (plugin) => {
  let active;
  await AdminDashboard.leftMenu.pluginsTabInLeftMenu().click();
  await AdminDashboard.plugins.allButtonInPluginStatuses().click();
  if (await plugin.isExisting() === false) {
    active = false;
  } else {
    await expect(plugin).toExist();
    active = await plugin.$(BaseSelectors.deactivateSelector).isExisting();
  }
  return active;
};

export const checkCrossdomainSettings = async () => {
  await browser.url(baseUrl + testData.endpoints.adminEndpoint);
  await AdminDashboard.leftMenu.settingsTabInLeftMenu().click();
  await AdminDashboard.leftMenu.submenuItemInNavBar(testData.plugins.multilangSettingsHref).click();
  const switcherText = await AdminDashboard.multilangSettings.crossdomainStatusSwitcher().getText();
  await expect(switcherText).toContain('Enabled');
  await AdminDashboard.multilangSettings.crossdomainSaveUpdateButton().click();
  await AdminDashboard.leftMenu.submenuItemInNavBar(testData.plugins.multilangSettingsHref).click();
  const isSelected = await AdminDashboard.multilangSettings.showLangInHeaderCheckbox().isSelected();
  await expect(isSelected).toBe(true);

  await openSubmenuTab(AdminDashboard.leftMenu.settingsTabInLeftMenu(), testData.plugins.multilangSettingsHref);
  await AdminDashboard.multilangSettings.saveSettingsButton().click();
  await expect(AdminDashboard.multilangSettings.prodOptionInEnvironmentDropdown()).toHaveAttribute(testData.attributes.selected);

  await AdminDashboard.leftMenu.submenuItemInNavBar(testData.plugins.multilangSettingsHref).click();
  await AdminDashboard.multilangSettings.saveSettingsButton().click();
  await expect(AdminDashboard.multilangSettings.prodOptionInEnvironmentDropdown()).toHaveAttribute(testData.attributes.selected);
};

export const getHrefAttributesFromPolylang = async (url) => {
  await expect(PolylangPage.sitesCell(url)).toBeExisting();
  let hrefsArray = await PolylangPage.sitesCell(url).getText();
  hrefsArray = hrefsArray.toString().split(/\s+/);
  return hrefsArray;
};

export const getHreflangAttributesFromPolylang = async (url) => {
  let hreflangsArray = await PolylangPage.sitesCell(url).nextElement()
    .getText();
  hreflangsArray = hreflangsArray.split('\n');
  return hreflangsArray;
};

export const getAttributesFromSite = async (attribute) => {
  const data = [];
  const headLinks = await BaseSelectors.forCheckingHrefsAttributes;
  for (let index = 0; index < headLinks.length; index++) {
    const test = await headLinks[index].getAttribute(attribute);
    if (attribute === testData.attributes.href) {
      data.push(test.slice(0, -1));
    } else {
      data.push(test);
    }
  }
  return data;
};

export const getSrcsetAttribute = async (url) => {
  await PolylangPage.showButton(url).click();
  const scrsetAttr = await PolylangPage.sitesCell(url).parentElement()
    .$(BaseSelectors.wpContentSelector)
    .getText();
  return scrsetAttr;
};

export const checkSrcset = (arr, val) => {
  return arr.some((arrVal) => val === arrVal);
};

export const checkSrcsetAttribute = async (dataSrcset) => {
  const imagesSrcsetsArray = [];
  await expect(await BaseSelectors.allImages).toBeExisting();
  for (let index = 0; index < await BaseSelectors.allImages.length; index++) {
    const attribute = await BaseSelectors.allImages[index].getAttribute(testData.attributes.src);
    imagesSrcsetsArray.push(attribute);
  }
  const result = await checkSrcset(imagesSrcsetsArray, dataSrcset);
  await expect(result).toBeTruthy();  
};

export const getAttrValuePolylang = async (url, selector, pageType = 'main', attr) => {
  let attrValue;
  await browser.url(testData.polylangUrl);
  await PolylangPage.showButton(url).click();
  await PolylangPage.showAllButton.click();
  if (pageType === 'main') {
    await PolylangPage.editNetButton.click();
    attrValue = await PolylangPage.siteInput(baseUrl.slice(0, -1)).parentElement()
      .parentElement()
      .$(selector)
      .getAttribute(testData.attributes.value);  
  } else {
    await PolylangPage.editButtonInPagesTable[pageType].click();
    await expect(PolylangPage.linkOnEditGroupPage).toBeExisting();
    const flagsOnEditPage = await getArrayOfAttributeValues(PolylangPage.siteInputsOnEditPage, testData.attributes.value);
    const linkToExclude = flagsOnEditPage.find(link => link.includes(baseUrl) && link !== baseUrl);

    const linksOnEditPage = await getArrayOfAttributeValues(PolylangPage.linkOnEditGroupPage, testData.attributes.value);
    const indexOfLink = linksOnEditPage.findIndex(link => link.includes(baseUrl.slice(0, -1)) && !link.includes(linkToExclude));

    if (attr === testData.attributes.alt) {
      attrValue = await PolylangPage.altFlagInLinksGroupPage[indexOfLink].getAttribute(testData.attributes.value);
    } else {
      attrValue = await PolylangPage.titleFlagInLinksGroupPage[indexOfLink].getAttribute(testData.attributes.value);
    }
  }
  return attrValue;
};

export const getPageLinks = async (url, pageType) => {
  let casinosLinks;
  await PolylangPage.showButton(url).click();
  await PolylangPage.showAllButton.click();

  if (baseUrl === 'https://qa.casino-kit-prod.site/') {
    casinosLinks = await PolylangPage.sitesCell(pageType).nextElement()
      .getText();
  } else {
    casinosLinks = await PolylangPage.linksListCellsInTable[pageType].getText();
  }
  return casinosLinks.split(/\s+/);
};

export const getHreflangsForDifferentPages = async (targetUrl) => {
  const localesArray = [];
  const targetUrls = targetUrl;

  await browser.url(`https://polylangkos.prokit.me/api/site?url=${baseUrl}`);
  const siteData = await $('body').getText();
  const newsiteData = JSON.parse(siteData);

  for (let index = 0; index < targetUrls.length; index++) {
    for (let i = 0; i < newsiteData.links.length; i++) {
      const sitesObj = newsiteData.links[i];
      for (let j = 0; j < sitesObj.length; j++) {
        const linkObj = sitesObj[j];
        if (linkObj.url === targetUrls[index] && linkObj.local) {
          localesArray.push(linkObj.local);
          break;
        }
      }
    }
  }
  return localesArray;
};
