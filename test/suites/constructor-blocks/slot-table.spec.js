import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('slot table', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks slot table');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksslottable.addBlockinButtonpaslottable().click();
        await browser.keys('slot-table');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksslottable.blockinlistButtonslottable().scrollIntoView();
        await AdminDashboard.constructorBlocksslottable.blockinlistButtonslottable().moveTo();
        await AdminDashboard.constructorBlocksslottable.blockinlistButtonslottable().click();
        await updatePageAndCheckMessage();
    });
}); 