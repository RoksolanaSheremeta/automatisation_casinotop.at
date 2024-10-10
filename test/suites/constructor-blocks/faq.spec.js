//import (loginToAdmin) from '../models/login.methods.js';
const { loginToAdmin } = require('../../models/login.methods');

describe('Faq', () => {
    before('Pre-conditions', async() => {
        await loginToAdmin();
    });

    it('should open the homepage', async () => {
        await browser.url(baseUrl);
        const title = await browser.getTitle();
        console.log(title);
    });
});