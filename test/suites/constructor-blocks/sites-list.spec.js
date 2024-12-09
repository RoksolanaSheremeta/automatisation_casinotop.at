import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('sites list', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks sites list');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlockssiteslist.addBlockinButtonpasiteslist().click();
        await browser.keys('sites-list');
        await browser.pause(2000);

        await AdminDashboard.constructorBlockssiteslist.blockinlistButtonsiteslist().scrollIntoView();
        await AdminDashboard.constructorBlockssiteslist.blockinlistButtonsiteslist().moveTo();
        await AdminDashboard.constructorBlockssiteslist.blockinlistButtonsiteslist().click();
        await updatePageAndCheckMessage();
    });
}); 