import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('accordion block', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks accordion block');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksaccordionblock.addBlockinButtonpaaccordionblock().click();
        await browser.keys('accordion-block');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksaccordionblock.blockinlistButtonaccordionblock().scrollIntoView();
        await AdminDashboard.constructorBlocksaccordionblock.blockinlistButtonaccordionblock().moveTo();
        await AdminDashboard.constructorBlocksaccordionblock.blockinlistButtonaccordionblock().click();
        await updatePageAndCheckMessage();
    });
}); 