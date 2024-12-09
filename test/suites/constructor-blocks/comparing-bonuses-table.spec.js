import AdminDashboard from '../../pageobjects/admin-dashboard.selectors';
import { loginToAdmin } from '../../models/login.methods';
import { updatePageAndCheckMessage } from '../../models/admin.methods';

/* global baseUrl*/

describe('comparing bonuses table', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await AdminDashboard.leftMenu.pagesTabInLeftMenu().click();
        await AdminDashboard.addNewPage.addNewButtoninPagesTab().click();
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks comparing bonuses table');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlockscomparingbonusestable.addBlockinButtonpacomparingbonusestable().click();
        await browser.keys('comparing-bonuses-table');
        await browser.pause(2000);

        await AdminDashboard.constructorBlockscomparingbonusestable.blockinlistButtoncomparingbonusestable().scrollIntoView();
        await AdminDashboard.constructorBlockscomparingbonusestable.blockinlistButtoncomparingbonusestable().moveTo();
        await AdminDashboard.constructorBlockscomparingbonusestable.blockinlistButtoncomparingbonusestable().click();
        await updatePageAndCheckMessage();
    });
}); 