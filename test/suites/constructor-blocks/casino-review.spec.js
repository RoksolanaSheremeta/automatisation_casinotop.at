import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('casino review', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks casino review');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlockscasinoreview.addBlockinButtonpacasinoreview().click();
        await browser.keys('casino-review');
        await browser.pause(2000);

        await AdminDashboard.constructorBlockscasinoreview.blockinlistButtoncasinoreview().scrollIntoView();
        await AdminDashboard.constructorBlockscasinoreview.blockinlistButtoncasinoreview().moveTo();
        await AdminDashboard.constructorBlockscasinoreview.blockinlistButtoncasinoreview().click();
        await updatePageAndCheckMessage();
    });
}); 