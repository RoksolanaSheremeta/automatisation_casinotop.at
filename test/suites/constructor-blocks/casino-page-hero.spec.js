import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('casino page hero', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenuCasino.pagesTabInLeftMenuCasino().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test casino for maranello bloks casino page hero');

        await browser.keys('Enter');
        await browser.keys('/casino-page-hero');
        await browser.keys('Enter');
        await browser.pause(2000);

        await updatePageAndCheckMessage();
    });
}); 