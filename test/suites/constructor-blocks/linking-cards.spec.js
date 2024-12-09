import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('linking cards', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks linking  cards');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlockslinkingcards.addBlockinButtonpalinkingcards().click();
        await browser.keys('linking-cards');
        await browser.pause(2000);

        await AdminDashboard.constructorBlockslinkingcards.blockinlistButtonlinkingcards().scrollIntoView();
        await AdminDashboard.constructorBlockslinkingcards.blockinlistButtonlinkingcards().moveTo();
        await AdminDashboard.constructorBlockslinkingcards.blockinlistButtonlinkingcards().click();
        await updatePageAndCheckMessage();
    });
}); 