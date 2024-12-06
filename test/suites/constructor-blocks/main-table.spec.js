import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('Faq', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks main table');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksmaintable.addBlockinButtonmaintable().click();
        await browser.keys('main-table');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksmaintable.blockinlistButtonmaintable().scrollIntoView();
        await AdminDashboard.constructorBlocksmaintable.blockinlistButtonmaintable().moveTo();
        await AdminDashboard.constructorBlocksmaintable.blockinlistButtonmaintable().click();
        await updatePageAndCheckMessage();
    });
}); 