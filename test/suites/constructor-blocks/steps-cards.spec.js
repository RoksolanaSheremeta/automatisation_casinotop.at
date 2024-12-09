import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('steps cards', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks steps cards');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksstepscards.addBlockinButtonpastepscards().click();
        await browser.keys('steps-cards');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksstepscards.blockinlistButtonstepscards().scrollIntoView();
        await AdminDashboard.constructorBlocksstepscards.blockinlistButtonstepscards().moveTo();
        await AdminDashboard.constructorBlocksstepscards.blockinlistButtonstepscards().click();
        await updatePageAndCheckMessage();
    });
}); 