import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('email gathering', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks email gathering');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksemailgathering.addBlockinButtonpaemailgathering().click();
        await browser.keys('email-gathering');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksemailgathering.blockinlistButtonemailgathering().scrollIntoView();
        await AdminDashboard.constructorBlocksemailgathering.blockinlistButtonemailgathering().moveTo();
        await AdminDashboard.constructorBlocksemailgathering.blockinlistButtonemailgathering().click();
        await updatePageAndCheckMessage();
    });
}); 