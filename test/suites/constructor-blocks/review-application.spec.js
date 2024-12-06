import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('review application', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks review application');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksreviewapplication.addBlockinButtonpareviewapplication().click();
        await browser.keys('review-application');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksreviewapplication.blockinlistButtonreviewapplication().scrollIntoView();
        await AdminDashboard.constructorBlocksreviewapplication.blockinlistButtonreviewapplication().moveTo();
        await AdminDashboard.constructorBlocksreviewapplication.blockinlistButtonreviewapplication().click();
        await updatePageAndCheckMessage();
    });
}); 