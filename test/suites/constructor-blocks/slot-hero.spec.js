import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('slot hero', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenuSlot.pagesTabInLeftMenuSlot().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test slot for maranello bloks slot hero');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksslothero.addBlockinButtonpaslothero().click();
        await browser.keys('slot-hero');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksslothero.blockinlistButtonslothero().scrollIntoView();
        await AdminDashboard.constructorBlocksslothero.blockinlistButtonslothero().moveTo();
        await AdminDashboard.constructorBlocksslothero.blockinlistButtonslothero().click();
        await updatePageAndCheckMessage();
    });
}); 