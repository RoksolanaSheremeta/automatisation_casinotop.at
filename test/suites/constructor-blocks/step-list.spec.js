import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('step list', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks step list');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlockssteplist.addBlockinButtonpasteplist().click();
        await browser.keys('step-list');
        await browser.pause(2000);

        await AdminDashboard.constructorBlockssteplist.blockinlistButtonsteplist().scrollIntoView();
        await AdminDashboard.constructorBlockssteplist.blockinlistButtonsteplist().moveTo();
        await AdminDashboard.constructorBlockssteplist.blockinlistButtonsteplist().click();
        await updatePageAndCheckMessage();
    });
}); 