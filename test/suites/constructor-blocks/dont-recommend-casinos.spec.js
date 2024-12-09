import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('dont recommend casinos', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks dont recommend casinos');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksdontrecommendcasinos.addBlockinButtonpadontrecommendcasinos().click();
        await browser.keys('dont-recommend-casinos');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksdontrecommendcasinos.blockinlistButtondontrecommendcasinos().scrollIntoView();
        await AdminDashboard.constructorBlocksdontrecommendcasinos.blockinlistButtondontrecommendcasinos().moveTo();
        await AdminDashboard.constructorBlocksdontrecommendcasinos.blockinlistButtondontrecommendcasinos().click();
        await updatePageAndCheckMessage();
    });
}); 