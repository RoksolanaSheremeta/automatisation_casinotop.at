import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('tip', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks tip');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlockstip.addBlockinButtonpatip().click();
        await browser.keys('tip');
        await browser.pause(2000);

        await AdminDashboard.constructorBlockstip.blockinlistButtontip().scrollIntoView();
        await AdminDashboard.constructorBlockstip.blockinlistButtontip().moveTo();
        await AdminDashboard.constructorBlockstip.blockinlistButtontip().click();
        await updatePageAndCheckMessage();
    });
}); 