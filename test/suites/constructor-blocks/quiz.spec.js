import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('quiz', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks quiz');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksquiz.addBlockinButtonpaquiz().click();
        await browser.keys('quiz');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksquiz.blockinlistButtonquiz().scrollIntoView();
        await AdminDashboard.constructorBlocksquiz.blockinlistButtonquiz().moveTo();
        await AdminDashboard.constructorBlocksquiz.blockinlistButtonquiz().click();
        await updatePageAndCheckMessage();
    });
}); 