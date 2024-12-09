import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('title and text', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks title and text');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlockstitleandtext.addBlockinButtonpatitleandtext().click();
        await browser.keys('title-and-text');
        await browser.pause(2000);

        await AdminDashboard.constructorBlockstitleandtext.blockinlistButtontitleandtext().scrollIntoView();
        await AdminDashboard.constructorBlockstitleandtext.blockinlistButtontitleandtext().moveTo();
        await AdminDashboard.constructorBlockstitleandtext.blockinlistButtontitleandtext().click();
        await updatePageAndCheckMessage();
    });
}); 