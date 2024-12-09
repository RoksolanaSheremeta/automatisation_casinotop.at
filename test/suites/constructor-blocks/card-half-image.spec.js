import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('card half image', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks card half image');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlockscardhalfimage.addBlockinButtonpacardhalfimage().click();
        await browser.keys('card-half-image');
        await browser.pause(2000);

        await AdminDashboard.constructorBlockscardhalfimage.blockinlistButtoncardhalfimage().scrollIntoView();
        await AdminDashboard.constructorBlockscardhalfimage.blockinlistButtoncardhalfimage().moveTo();
        await AdminDashboard.constructorBlockscardhalfimage.blockinlistButtoncardhalfimage().click();
        await updatePageAndCheckMessage();
    });
}); 