import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('casino banner', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks casino banner');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlockscasinobanner.addBlockinButtonpacasinobanner().click();
        await browser.keys('casino-banner');
        await browser.pause(2000);

        await AdminDashboard.constructorBlockscasinobanner.blockinlistButtoncasinobanner().scrollIntoView();
        await AdminDashboard.constructorBlockscasinobanner.blockinlistButtoncasinobanner().moveTo();
        await AdminDashboard.constructorBlockscasinobanner.blockinlistButtoncasinobanner().click();
        await updatePageAndCheckMessage();
    });
}); 