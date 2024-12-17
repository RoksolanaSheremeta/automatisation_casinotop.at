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
        await AdminDashboard.editPostsPage.postTitle().setValue('Test page for maranello bloks faq');

        await browser.keys('Enter');
        await browser.keys('/section');
        await browser.keys('Enter');
        await AdminDashboard.constructorBlocksfaq.addBlockinButtonfaq().click();
        await browser.keys('faq');
        await browser.pause(2000);

        await AdminDashboard.constructorBlocksfaq.blockinlistButtonfaq().scrollIntoView();
        await AdminDashboard.constructorBlocksfaq.blockinlistButtonfaq().moveTo();
        await AdminDashboard.constructorBlocksfaq.blockinlistButtonfaq().click();
        await AdminDashboard.constructorBlocksfaq.addBlockinButtonAddRow().click();
        await browser.pause(5000);
        
        // Ініціалізуємо TinyMCE
        await AdminDashboard.constructorBlocksfaq.initTinyMCE();

        // Вводимо питання та відповідь
        await AdminDashboard.constructorBlocksfaq.questionInputField('What is the Maranello theme?');
        await browser.pause(3000);
        await AdminDashboard.constructorBlocksfaq.answerInputField('The Maranello theme is a customizable WordPress theme designed for rich content blocks.');

        await updatePageAndCheckMessage();
    });
}); 