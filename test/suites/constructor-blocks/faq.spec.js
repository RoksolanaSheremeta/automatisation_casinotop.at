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
        await updatePageAndCheckMessage();
    });
}); 