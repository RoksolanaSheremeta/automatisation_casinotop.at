import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('blog hero', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenuPost.pagesTabInLeftMenuPost().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test post for maranello bloks blog hero');

        await browser.keys('Enter');
        await browser.keys('/blog-hero');
        await browser.keys('Enter');
        await browser.pause(2000);

        await updatePageAndCheckMessage();
    });
}); 