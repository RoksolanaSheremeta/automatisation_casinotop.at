import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('comparing table', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks comparing table');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlockscomparingtable.addBlockinButtonpacomparingtable().click();
        await browser.keys('comparing-table');
        await browser.pause(2000);

        await AdminDashboard.constructorBlockscomparingtable.blockinlistButtoncomparingtable().scrollIntoView();
        await AdminDashboard.constructorBlockscomparingtable.blockinlistButtoncomparingtable().moveTo();
        await AdminDashboard.constructorBlockscomparingtable.blockinlistButtoncomparingtable().click();
        await updatePageAndCheckMessage();
    });
}); 