import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('games table', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks games table');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksgamestable.addBlockinButtonpagamestable().click();
        await browser.keys('games-table');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksgamestable.blockinlistButtongamestable().scrollIntoView();
        await AdminDashboard.constructorBlocksgamestable.blockinlistButtongamestable().moveTo();
        await AdminDashboard.constructorBlocksgamestable.blockinlistButtongamestable().click();
        await updatePageAndCheckMessage();
    });
}); 