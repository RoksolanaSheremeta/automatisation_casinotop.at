import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('blog posts cards', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks blog posts cards');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksblogpostscards.addBlockinButtonpablogpostscards().click();
        await browser.keys('blog-posts-cards');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksblogpostscards.blockinlistButtonblogpostscards().scrollIntoView();
        await AdminDashboard.constructorBlocksblogpostscards.blockinlistButtonblogpostscards().moveTo();
        await AdminDashboard.constructorBlocksblogpostscards.blockinlistButtonblogpostscards().click();
        await updatePageAndCheckMessage();
    });
}); 