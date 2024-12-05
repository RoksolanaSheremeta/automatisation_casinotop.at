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
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks page hero');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlockspagehero.addBlockinButtonpagehero().click();
        await browser.keys('page-hero');
        await browser.pause(2000);

        await AdminDashboard.constructorBlockspagehero.blockinlistButtonpagehero().scrollIntoView();
        await AdminDashboard.constructorBlockspagehero.blockinlistButtonpagehero().moveTo();
        await AdminDashboard.constructorBlockspagehero.blockinlistButtonpagehero().click();
        await updatePageAndCheckMessage();
    });
}); 