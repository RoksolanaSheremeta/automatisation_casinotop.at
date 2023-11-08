import LoginPage from '../pageobjects/LoginPage';

const expectchai = require('chai').expect;
// const LoginPage = require('../pageobjects/LoginPage')
const fs = require('fs');
const credentials = JSON.parse(fs.readFileSync('test/testData/LoginPage.json'));


describe('Contact Page', async() => {
  credentials.forEach(({userName, Subject, message}) => {
    it('Test 1: Check Subscribe block when put fail data',  async () => {
      await browser.url('/contact-us/');
      await LoginPage.Login(userName, Subject, message);
      await LoginPage.btnSend.click();
      await browser.pause(3000);
      await console.log (await LoginPage.response.getText());
    });
  });
    
  it('Test 2: Check to Have Title',async() => {
    await browser.url('/contact-us/');
    console.log(await browser.getTitle());
    await expect(browser).toHaveTitleContaining('Cоntact US - NZ Online Casino CasinoTop.co.nz');
    await $('link[rel=\'canonical\']');
  });

  it('Test 3: Canonical', async () => {
    await browser.url('/contact-us/');
    const canonical = await browser.$('link[rel="canonical"]');
    await expect(canonical).toBePresent();
    const linkcanonical = await $('link[rel="canonical"]');
    await expect(linkcanonical).toHaveLink(`${baseUrl}contact-us/`);
  });

  it('Test 4: Check Subscribe block when put fail data',  async () => {
    await browser.url('/contact-us/');
    await LoginPage.Login('Test name for autotest', 'automationtest@gmail.com', 'My automation message');
    await LoginPage.btnSend.click();
    // await browser.pause(3000);
    await console.log (await LoginPage.response.getText());
  });

  it('Test 5: Check Subscribe block when put succses data',  async () => {
    await browser.url('/contact-us/');
    await LoginPage.Login('Test name for autotest', 'automationtest@gmail.com', 'My automation message');
    const dropdown = await $('select.wpcf7-validates-as-required');
    await dropdown.selectByAttribute('value', 'PR/Guest Posting');
    await dropdown.selectByVisibleText('Support');
    await dropdown.selectByIndex(1);
    console.log(await dropdown.getValue());
    expectchai(await dropdown.getValue()).to.equal('Partnerships/Affiliate');
    await $('select > option:nth-child(2)').click();
    // await $("textarea[name='your-message']").setValue("My automation message");
    // await browser.pause(3000);
    await LoginPage.btnSend.click();
    // await browser.pause(5000);
    console.log (await LoginPage.response.getText());
    await expect(browser).toHaveUrlContaining('contact-us');
    await expect(browser).toHaveTitle('Cоntact US - NZ Online Casino CasinoTop.co.nz');
  });
});