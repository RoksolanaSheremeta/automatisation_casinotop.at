import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('slots slider', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks slots slider');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksslotsslider.addBlockinButtonpaslotsslider().click();
        await browser.keys('slots-slider');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksslotsslider.blockinlistButtonslotsslider().scrollIntoView();
        await AdminDashboard.constructorBlocksslotsslider.blockinlistButtonslotsslider().moveTo();
        await AdminDashboard.constructorBlocksslotsslider.blockinlistButtonslotsslider().click();
        await updatePageAndCheckMessage();
    });
}); 