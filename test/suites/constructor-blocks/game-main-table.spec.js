import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('game main table', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks game main table');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksgamemaintable.addBlockinButtonpagamemaintable().click();
        await browser.keys('game-main-table');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksgamemaintable.blockinlistButtongamemaintable().scrollIntoView();
        await AdminDashboard.constructorBlocksgamemaintable.blockinlistButtongamemaintable().moveTo();
        await AdminDashboard.constructorBlocksgamemaintable.blockinlistButtongamemaintable().click();
        await updatePageAndCheckMessage();
    });
}); 