import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('Faq', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks text-with-list');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlockstextwithlist.addBlockinButtonpatextwithlist().click();
        await browser.keys('text-with-list');
        await browser.pause(2000);

        await AdminDashboard.constructorBlockstextwithlist.blockinlistButtontextwithlist().scrollIntoView();
        await AdminDashboard.constructorBlockstextwithlist.blockinlistButtontextwithlist().moveTo();
        await AdminDashboard.constructorBlockstextwithlist.blockinlistButtontextwithlist().click();
        await updatePageAndCheckMessage();
    });
}); 