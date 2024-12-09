import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('linking cards colored', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks linking cards colored');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlockslinkingcardscolored.addBlockinButtonpalinkingcardscolored().click();
        await browser.keys('linking-cards-colored');
        await browser.pause(2000);

        await AdminDashboard.constructorBlockslinkingcardscolored.blockinlistButtonlinkingcardscolored().scrollIntoView();
        await AdminDashboard.constructorBlockslinkingcardscolored.blockinlistButtonlinkingcardscolored().moveTo();
        await AdminDashboard.constructorBlockslinkingcardscolored.blockinlistButtonlinkingcardscolored().click();
        await updatePageAndCheckMessage();
    });
}); 