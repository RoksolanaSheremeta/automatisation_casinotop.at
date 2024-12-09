import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('payments common', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks payments common');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlockspaymentscommon.addBlockinButtonpapaymentscommon().click();
        await browser.keys('payments-common');
        await browser.pause(2000);

        await AdminDashboard.constructorBlockspaymentscommon.blockinlistButtonpaymentscommon().scrollIntoView();
        await AdminDashboard.constructorBlockspaymentscommon.blockinlistButtonpaymentscommon().moveTo();
        await AdminDashboard.constructorBlockspaymentscommon.blockinlistButtonpaymentscommon().click();
        await updatePageAndCheckMessage();
    });
}); 