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
        //await AdminDashboard.addNewPage.closeButtoninPages().click();
        await browser.pause(200000);
        if (await AdminDashboard.closeButtoninPages().isExisting()) {
            await AdminDashboard.closeButtoninPages().click()
        }
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page link');
        await updatePageAndCheckMessage();
    });
}); 