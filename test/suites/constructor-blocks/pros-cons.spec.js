import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('pros cons', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks pros cons');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksproscons.addBlockinButtonpaproscons().click();
        await browser.keys('pros-cons');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksproscons.blockinlistButtonproscons().scrollIntoView();
        await AdminDashboard.constructorBlocksproscons.blockinlistButtonproscons().moveTo();
        await AdminDashboard.constructorBlocksproscons.blockinlistButtonproscons().click();
        await updatePageAndCheckMessage();
    });
}); 