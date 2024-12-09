import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('sportsbook  hero', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenuSportsbook.pagesTabInLeftMenuSportsbook().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test casino for maranello bloks sportsbook hero');

        await browser.keys('Enter');
        await browser.keys('/sportsbook-hero');
        await browser.keys('Enter');
        await browser.pause(2000);

        await updatePageAndCheckMessage();
    });
}); 