import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('pages slider', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks pages slider');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlockspagesslider.addBlockinButtonpapagesslider().click();
        await browser.keys('pages-slider');
        await browser.pause(2000);

        await AdminDashboard.constructorBlockspagesslider.blockinlistButtonpagesslider().scrollIntoView();
        await AdminDashboard.constructorBlockspagesslider.blockinlistButtonpagesslider().moveTo();
        await AdminDashboard.constructorBlockspagesslider.blockinlistButtonpagesslider().click();
        await updatePageAndCheckMessage();
    });
}); 