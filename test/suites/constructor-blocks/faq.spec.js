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
        await AdminDashboard.closeButtonPage.closeButtoninPages().click();
        if (await AdminDashboard.closeButtonPage.closeButtoninPages().isExisting()) {
            await AdminDashboard.closeButtonPage.closeButtoninPages().click()
        }
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks');
        //await updatePageAndCheckMessage();

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocks.addBlockinButton().click();
        await browser.keys('faq');
        await browser.pause(2000);
        await AdminDashboard.constructorBlocks.blockinlistButton().scrollIntoView();
        await AdminDashboard.constructorBlocks.blockinlistButton().moveTo();
        await AdminDashboard.constructorBlocks.blockinlistButton().click();

        await updatePageAndCheckMessage();
    });
}); 