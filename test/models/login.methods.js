import WebcheckPage from '../pageobjects/webcheck.page';
import AdminDashboard from '../pageobjects/admin-dashboard.selectors';

export const loginToWebcheck = async (username, password) => {
  await browser.url('https://web-check.it-boosta.com/');
  if (await WebcheckPage.navigationSearchInput.isExisting() === false) {
    await expect(WebcheckPage.usernameInput).toBeExisting();
    await WebcheckPage.usernameInput.setValue(username);
    await WebcheckPage.passwordInput.setValue(password);
    await WebcheckPage.loginButton.click();
    await expect(WebcheckPage.navigationSearchInput).toBeExisting();  
  }
};

export const loginToAdmin = async (baseUrl, username, password) => {
  await browser.url(`${baseUrl}sec-adm/`);
  if (await AdminDashboard.menuItemInNavBar('Casinos').isExisting() === false) {
    if (await AdminDashboard.emailInput.isExisting() === false) {
      await browser.url(`https://www-data:azimjArnyLy89=@${baseUrl.slice(8)}sec-adm/`);
    }
    await expect(AdminDashboard.emailInput).toBeExisting();
    await AdminDashboard.emailInput.setValue(username);
    await expect(AdminDashboard.passwordInput).toBeExisting();
    await AdminDashboard.passwordInput.setValue(password);
    await AdminDashboard.loginButton.click();
    await expect(AdminDashboard.menuItemInNavBar('Casinos')).toBeExisting();
  }
};