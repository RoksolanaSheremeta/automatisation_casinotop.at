import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('authors', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks authors');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksauthors.addBlockinButtonpaauthors().click();
        await browser.keys('authors');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksauthors.blockinlistButtonauthors().scrollIntoView();
        await AdminDashboard.constructorBlocksauthors.blockinlistButtonauthors().moveTo();
        await AdminDashboard.constructorBlocksauthors.blockinlistButtonauthors().click();
        await updatePageAndCheckMessage();
    });
}); 