import AdminDashboard from '../pageobjects/admin-dashboard.selectors';
import testData from '../helpers/test-data';
import { createNewUserAPI } from './API.methods';
/* global baseUrl */

export const loginToAdmin = async (invalid = 'valid') => {
  let user, password;
  if (!baseUrl.includes('prokit.me')) {
    const newUserCreds = await createNewUserAPI(baseUrl.slice(8, -1));
    user = newUserCreds.user;
    password = newUserCreds.password;
  } else {
    // need to set user creds here manually for dev environments
    user = 'qa';
    password = '1&M!SJ5HcMvp!Rf#hxTF()B0';
  }
  await browser.url(baseUrl + testData.endpoints.adminEndpoint);
  if (!await AdminDashboard.leftMenu.casinosTabInLeftMenu().isExisting()) {
    if (!await AdminDashboard.login.emailInput().isExisting()) {
      if (baseUrl === 'https://qa.casino-kit-prod.site/') {
        await browser.url(baseUrl + testData.endpoints.adminEndpoint);
      } else {
        await browser.url(`https://www-data:azimjArnyLy89=@${baseUrl.slice(8)}sec-adm/`);
      }
    }
    await expect(AdminDashboard.login.emailInput()).toBeExisting();
    await expect(AdminDashboard.login.emailInput()).toBeDisplayed();
    await AdminDashboard.login.emailInput().setValue(user);
    await expect(AdminDashboard.login.passwordInput()).toBeExisting();
    await AdminDashboard.login.passwordInput().setValue(password);
    await AdminDashboard.login.loginButton().click();
    if (invalid === 'invalid') {
      await expect(AdminDashboard.login.errorPopup()).toHaveText(testData.loginError);
    } else {
      await expect(AdminDashboard.leftMenu.casinosTabInLeftMenu()).toBeExisting();
    }
  }
};

export const logoutFromAdmin = async () => {
  await AdminDashboard.headerBarMenu.myAccountButtonInNavBar().moveTo();
  await expect(AdminDashboard.headerBarMenu.logoutButtonInMyAccountOptions()).toBeDisplayed();
  await AdminDashboard.headerBarMenu.logoutButtonInMyAccountOptions().click();
};