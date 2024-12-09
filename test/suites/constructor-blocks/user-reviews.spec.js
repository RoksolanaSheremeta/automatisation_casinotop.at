import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('user reviews', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks user reviews');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksuserreviews.addBlockinButtonpauserreviews().click();
        await browser.keys('user-reviews');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksuserreviews.blockinlistButtonuserreviews().scrollIntoView();
        await AdminDashboard.constructorBlocksuserreviews.blockinlistButtonuserreviews().moveTo();
        await AdminDashboard.constructorBlocksuserreviews.blockinlistButtonuserreviews().click();
        await updatePageAndCheckMessage();
    });
}); 