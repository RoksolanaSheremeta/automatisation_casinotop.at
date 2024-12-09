import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('image guide', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks image guide');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksimageguide.addBlockinButtonpaimageguide().click();
        await browser.keys('image-guide');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksimageguide.blockinlistButtonimageguide().scrollIntoView();
        await AdminDashboard.constructorBlocksimageguide.blockinlistButtonimageguide().moveTo();
        await AdminDashboard.constructorBlocksimageguide.blockinlistButtonimageguide().click();
        await updatePageAndCheckMessage();
    });
}); 