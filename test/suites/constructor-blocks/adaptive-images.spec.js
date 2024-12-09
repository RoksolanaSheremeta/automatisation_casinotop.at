import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('adaptive images', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks adaptive images');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksadaptiveimages.addBlockinButtonpaadaptiveimages().click();
        await browser.keys('adaptive-images');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksadaptiveimages.blockinlistButtonadaptiveimages().scrollIntoView();
        await AdminDashboard.constructorBlocksadaptiveimages.blockinlistButtonadaptiveimages().moveTo();
        await AdminDashboard.constructorBlocksadaptiveimages.blockinlistButtonadaptiveimages().click();
        await updatePageAndCheckMessage();
    });
}); 