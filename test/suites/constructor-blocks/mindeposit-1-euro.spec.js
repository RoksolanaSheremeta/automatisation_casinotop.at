import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('mindeposit 1 euro', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks mindeposit 1 euro');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksmindeposit1euro.addBlockinButtonpamindeposit1euro().click();
        await browser.keys('mindeposit-1-euro');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksmindeposit1euro.blockinlistButtonmindeposit1euro().scrollIntoView();
        await AdminDashboard.constructorBlocksmindeposit1euro.blockinlistButtonmindeposit1euro().moveTo();
        await AdminDashboard.constructorBlocksmindeposit1euro.blockinlistButtonmindeposit1euro().click();
        await updatePageAndCheckMessage();
    });
}); 