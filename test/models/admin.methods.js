import AdminDashboard from '../pageobjects/admin-dashboard.selectors';
import WebcheckPage from '../pageobjects/webcheck.page';
import { loginToAdmin, loginToWebcheck } from './login.methods';
/* global baseUrl */

export const getAdminCredsFromWebcheck  = async (domain) => {
  await WebcheckPage.navigationSearchInput.setValue(domain);
  // eslint-disable-next-line
  await browser.pause(1000);
  await expect(WebcheckPage.searchResult).toBeExisting();
  await WebcheckPage.searchResult[0].click();
  if (await WebcheckPage.tableHeading.isExisting() === false) {
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    await WebcheckPage.endDateInput.setValue(oneYearFromNow.toLocaleDateString('en-GB'));
    await WebcheckPage.createUserButton.click();
    await WebcheckPage.closePopUpButton.click();
  } 
  const userName = await WebcheckPage.userLoginCell.getText();
  const userPassword = await WebcheckPage.userPasswordCell.getText();
  return [userName, userPassword];
};

export const getPagesUrls = async (pagesToCheckArray) => {
  const pages = ['Posts', 'Pages', 'Casinos', 'Slots'];
  for (let index = 0; index < pages.length; index++) {
    await AdminDashboard.menuItemInNavBar(pages[index]).click();
    if (await AdminDashboard.rowInTable.length > 1) {
      await AdminDashboard.rowInTable[0].moveTo();
      await expect(AdminDashboard.editPostButton[0]).toBeDisplayed();
      await AdminDashboard.editPostButton[0].click();
      await expect(AdminDashboard.linkToPage).toBeExisting();
      const link = await AdminDashboard.linkToPage.getText();
      pagesToCheckArray.push(link);  
    }
  }
  return pagesToCheckArray;
};

export const getSubpagesUrls = async (pagesToCheckArray) => {
  const subpages = ['Categories', 'Tags', 'Payments', 'Softwares'];
  await AdminDashboard.menuItemInNavBar('Casinos').click();
  for (let index = 0; index < subpages.length; index++) {
    await AdminDashboard.submenuItemInNavBar(subpages[index]).click();
    if (await AdminDashboard.rowInTableForTagsCategoriesPayment.length > 1) {
      await AdminDashboard.rowInTableForTagsCategoriesPayment[0].moveTo();
      await expect(AdminDashboard.viewButton[0]).toBeDisplayed();
      const url = await AdminDashboard.viewButton[0].getAttribute('href');
      pagesToCheckArray.push(url);
    }
  }
  return pagesToCheckArray;
};

export const getUrlsForSEOchecks = async (addBaseUrl = 'yes') => {
  let pagesToCheckArray = [];
  await loginToWebcheck('autotest', 'autotest-password');
  const adminCredentials = await getAdminCredsFromWebcheck(baseUrl.slice(8, -1));
  await loginToAdmin(baseUrl, adminCredentials[0], adminCredentials[1]);
  pagesToCheckArray = await getPagesUrls(pagesToCheckArray);
  pagesToCheckArray = await getSubpagesUrls(pagesToCheckArray);
  if (addBaseUrl === 'yes') {
    await pagesToCheckArray.push(baseUrl.slice(0, -1));
  }
  return pagesToCheckArray;
};