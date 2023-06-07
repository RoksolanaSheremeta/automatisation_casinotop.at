import testData from '../helpers/test-data';
import AdminDashboard from '../pageobjects/admin-dashboard.selectors';
import BaseSelectors from '../pageobjects/base.selectors';
import { checkUncheckedCheckbox } from './base.methods';
import { loginToAdmin } from './login.methods';
/* global baseUrl */

export const getPagesUrls = async (pagesToCheckArray) => {
  const pages = [
    AdminDashboard.leftMenu.postsTabInLeftMenu(),
    AdminDashboard.leftMenu.pagesTabInLeftMenu(),
    AdminDashboard.leftMenu.casinosTabInLeftMenu(),
    AdminDashboard.leftMenu.slotsTabInLeftMenu(),
  ]; 

  for (let index = 0; index < pages.length; index++) {
    let link;
    await pages[index].click();
    if (await AdminDashboard.postTypesTable.rowInTable().length > 1) {
      await openEditPage(0);
      const hrefAttribute = await AdminDashboard.editPostsPage.linkToPage().getAttribute(testData.attributes.href);
      if (hrefAttribute !== null) {
        link = await AdminDashboard.editPostsPage.linkToPage().getAttribute(testData.attributes.href);
      } else {
        link = await AdminDashboard.editPostsPage.linkToPage().$('a')
          .getAttribute(testData.attributes.href);
      }
      pagesToCheckArray.push(link);
    }
  }
};

const openEditPage = async (index) => {
  await AdminDashboard.postTypesTable.rowInTable()[index].scrollIntoView({block: 'center'});
  await AdminDashboard.postTypesTable.rowInTable()[index].moveTo();
  await expect(AdminDashboard.postTypesTable.editPostButton()[index]).toBeDisplayed();
  await AdminDashboard.postTypesTable.editPostButton()[index].click();
  await expect(AdminDashboard.editPostsPage.linkToPage()).toBeExisting();
};

export const getSubpagesUrls = async (pagesToCheckArray) => {
  const subpages = ['category', 'tag', 'payments', 'software'];
  await AdminDashboard.leftMenu.casinosTabInLeftMenu().click();
  for (let index = 0; index < subpages.length; index++) {
    await AdminDashboard.leftMenu.submenuItemInNavBar(subpages[index]).click();
    if (await AdminDashboard.postTypesTable.rowInTableForTagsCategoriesPayment().length > 1) {
      await AdminDashboard.postTypesTable.rowInTableForTagsCategoriesPayment()[0].moveTo();
      await expect(AdminDashboard.postTypesTable.viewButton()[0]).toBeDisplayed();
      const url = await AdminDashboard.postTypesTable.viewButton()[0].getAttribute(testData.attributes.href);
      pagesToCheckArray.push(url);
    }
  }
};

export const getUrlsForSEOchecks = async (addBaseUrl = 'no') => {
  const pagesToCheckArray = [];
  await loginToAdmin();
  await getPagesUrls(pagesToCheckArray);
  await getSubpagesUrls(pagesToCheckArray);

  if (addBaseUrl === 'yes') {
    pagesToCheckArray.push(baseUrl.slice(0, -1));
  }
  return pagesToCheckArray;
};

export const openSubmenuTab = async (mainTab, subMenu) => {
  await mainTab.click();
  await expect(AdminDashboard.leftMenu.submenuItemInNavBar(subMenu)).toExist();
  await AdminDashboard.leftMenu.submenuItemInNavBar(subMenu).click();
};

export const checkShowToolbarCheckbox = async () => {
  await loginToAdmin();
  await AdminDashboard.headerBarMenu.myAccountButtonInNavBar().moveTo();
  await expect(AdminDashboard.headerBarMenu.editProfileButtonInUserMenu()).toBeDisplayed();
  await AdminDashboard.headerBarMenu.editProfileButtonInUserMenu().click();
  await expect(AdminDashboard.editPostsPage.showToolbarCheckbox()).toBeExisting();
  await checkUncheckedCheckbox(AdminDashboard.editPostsPage.showToolbarCheckbox());
  await AdminDashboard.headerBarMenu.yourProfileForm().$(BaseSelectors.submitButton)
    .click();
};

export const getPageTitle = async (page = 'home') => {
  await checkShowToolbarCheckbox();
  if (page === 'home') {
    await AdminDashboard.headerBarMenu.visitSiteButtonInTopNavigationMenu().click();
  } else {
    browser.url(page);
  }
  await AdminDashboard.headerBarMenu.editPageButtonFromTopNavigationPanel().click();
  const title = await AdminDashboard.editPostsPage.titleInput().getAttribute(testData.attributes.value);
  return title;
};

export const getExactPageLink = async (tabToClick) => {
  let link;
  await loginToAdmin();
  await tabToClick.click(); 
  if (await AdminDashboard.postTypesTable.rowInTableForTagsCategoriesPayment().length > 1) {
    await AdminDashboard.postTypesTable.rowInTable()[0].scrollIntoView({block: 'center'});
    await AdminDashboard.postTypesTable.rowInTable()[0].moveTo();
    await expect(AdminDashboard.postTypesTable.editPostButton()[0]).toBeDisplayed();
    await AdminDashboard.postTypesTable.editPostButton()[0].click();
    await expect(AdminDashboard.editPostsPage.linkToPage()).toBeExisting(); 
    link = await AdminDashboard.editPostsPage.linkToPage().getAttribute(testData.attributes.href);
  } else {
    console.log('There are no pages');
  }
  return link;
};

export const findPageWithSpecificBlock = async (elementToContain) => {
  let link;
  const pages = [
    AdminDashboard.leftMenu.postsTabInLeftMenu(),
    AdminDashboard.leftMenu.pagesTabInLeftMenu(),
    AdminDashboard.leftMenu.casinosTabInLeftMenu(),
    AdminDashboard.leftMenu.slotsTabInLeftMenu(),
  ]; 

  await loginToAdmin();

  let blockFound = false; // flag variable to keep track of whether block was found

  for (const page of pages) {
    await browser.url(`https://www-data:azimjArnyLy89=@${baseUrl.slice(8)}sec-adm/`);
    await page.click();

    if (await AdminDashboard.postTypesTable.rowInTable().length > 1) {
      for (let index = 0; index < await AdminDashboard.postTypesTable.rowInTable().length; index++) {
        await openEditPage(index);
        if (await AdminDashboard.editPostsPage.linkToPage().$('a')
          .isExisting()) {
          link = await (await AdminDashboard.editPostsPage.linkToPage().$('a')).getAttribute(testData.attributes.href);
        } else {
          link = await AdminDashboard.editPostsPage.linkToPage().getAttribute(testData.attributes.href);
        }

        await browser.url(link);

        if (await elementToContain.isExisting()) {
          blockFound = true;
          return link;
        }
        await browser.back();
        await browser.back();
      }
    }

    if (blockFound) { // break out of loop if block was found
      break;
    }
  }

  // If we reach this point, the block was not found
  return 'The block is absent in this domain';
};

export const checkThatAllLanguagesAreSelected = async () => {
  if (await AdminDashboard.headerBarMenu.languageSettingButtonInHeaderBar().isExisting()) {
    const langButtonText = await AdminDashboard.headerBarMenu.languageSettingButtonInHeaderBar().$('span.ab-label')
      .getText();
    if (langButtonText.includes('Show all languages')) {
      console.log('Correct lang');
    } else {
      await AdminDashboard.headerBarMenu.languageSettingButtonInHeaderBar().moveTo();
      await expect(AdminDashboard.headerBarMenu.langItemFromLangDropdownInHeaderBar()[0]).toBeDisplayed();
      await AdminDashboard.headerBarMenu.langItemFromLangDropdownInHeaderBar()[0].click();
      await expect(await AdminDashboard.headerBarMenu.languageSettingButtonInHeaderBar().$('span.ab-label')
        .getText()).toContain('Show all languages');
    }
  }
};
