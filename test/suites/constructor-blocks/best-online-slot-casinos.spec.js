import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('best online slot casinos', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks best online slot casinos');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksbestonlineslotcasinos.addBlockinButtonpabestonlineslotcasinos().click();
        await browser.keys('best-online-slot-casinos');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksbestonlineslotcasinos.blockinlistButtonbestonlineslotcasinos().scrollIntoView();
        await AdminDashboard.constructorBlocksbestonlineslotcasinos.blockinlistButtonbestonlineslotcasinos().moveTo();
        await AdminDashboard.constructorBlocksbestonlineslotcasinos.blockinlistButtonbestonlineslotcasinos().click();
        await updatePageAndCheckMessage();
    });
}); 