import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('game gallery', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks game gallery');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksgamegallery.addBlockinButtonpagamegallery().click();
        await browser.keys('game-gallery');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksgamegallery.blockinlistButtongamegallery().scrollIntoView();
        await AdminDashboard.constructorBlocksgamegallery.blockinlistButtongamegallery().moveTo();
        await AdminDashboard.constructorBlocksgamegallery.blockinlistButtongamegallery().click();
        await updatePageAndCheckMessage();
    });
}); 