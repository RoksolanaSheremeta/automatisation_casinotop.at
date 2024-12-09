import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('game tiles', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks game tiles');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksgametiles.addBlockinButtonpagametiles().click();
        await browser.keys('game-tiles');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksgametiles.blockinlistButtongametiles().scrollIntoView();
        await AdminDashboard.constructorBlocksgametiles.blockinlistButtongametiles().moveTo();
        await AdminDashboard.constructorBlocksgametiles.blockinlistButtongametiles().click();
        await updatePageAndCheckMessage();
    });
}); 