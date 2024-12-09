import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('author block', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks author block');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksauthorblock.addBlockinButtonpaauthorblock().click();
        await browser.keys('author-block');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksauthorblock.blockinlistButtonauthorblock().scrollIntoView();
        await AdminDashboard.constructorBlocksauthorblock.blockinlistButtonauthorblock().moveTo();
        await AdminDashboard.constructorBlocksauthorblock.blockinlistButtonauthorblock().click();
        await updatePageAndCheckMessage();
    });
}); 