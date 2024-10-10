import AdminDashboard from '../pageobjects/admin-dashboard.selectors';
import testData from '../helpers/test-data';
import { createNewUserAPI } from './API.methods';

export const getUserLoginAndPassword = async () => {
  let username, password;
  if (!baseUrl.includes('prokit.me')) {
    const newUserCreds = await createNewUserAPI(baseUrl.slice(8, -1));
    username = newUserCreds.user;
    password = newUserCreds.password;
  } else {
    // need to set user creds here manually for dev environments
    username = process.env.VAR_USER_NAME || 'adtestcasinos';
    password = process.env.VAR_USER_PASSWORD || 'AnUEVD3DbwbXiXX6U(XPP(Ux';
  }
  return { username, password };
};
export const loginToAdmin = async (invalid = 'valid', url = baseUrl) => {
  const { username, password } = await getUserLoginAndPassword();
  await browser.url(url + testData.endpoints.adminEndpoint);
  if (!await AdminDashboard.leftMenu.casinosTabInLeftMenu().isExisting()) {
    if (!await AdminDashboard.login.emailInput().isExisting()) {
      await browser.url(`https://www-data:azimjArnyLy89=@${url.slice(8)}sec-adm/`);
    }
    await expect(AdminDashboard.login.emailInput()).toBeExisting();
    await expect(AdminDashboard.login.emailInput()).toBeDisplayed();
    await AdminDashboard.login.emailInput().setValue(username);
    await expect(AdminDashboard.login.passwordInput()).toBeExisting();
    await AdminDashboard.login.passwordInput().setValue(password);
    if (invalid === 'invalid') {
      await AdminDashboard.login.passwordInput().setValue('asdasdasdasd');
    }
    await waitScrollAndClick(AdminDashboard.login.loginButton());
    if (invalid === 'invalid') {
      await expect(AdminDashboard.login.errorPopup()).toHaveText(testData.loginError);
    } else {
      if (! await AdminDashboard.leftMenu.casinosTabInLeftMenu().isExisting() && !baseUrl.includes('onlinecasinosbe.com')) {
        await expect(AdminDashboard.login.theEmailIsCorrectButton()).toBeExisting();
        await AdminDashboard.login.theEmailIsCorrectButton().click();
        await expect(AdminDashboard.leftMenu.casinosTabInLeftMenu()).toBeExisting();
      } else if (! await AdminDashboard.leftMenu.casinosTabInLeftMenu().isExisting() && baseUrl.includes('onlinecasinosbe.com')) {
        await AdminDashboard.login.emailInput().setValue(username);
        await AdminDashboard.login.passwordInput().setValue(password);
        await waitScrollAndClick(AdminDashboard.login.loginButton());
      } else {
        await expect(AdminDashboard.leftMenu.casinosTabInLeftMenu()).toBeExisting();
      }
    }
  }
};