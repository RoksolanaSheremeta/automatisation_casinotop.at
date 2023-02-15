import LoginPage from "../pageobjects/LoginPage"

const expectchai = require('chai').expect
//const LoginPage = require('../pageobjects/LoginPage')
const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync('test/testData/LoginPage.json'))


describe('Contact Page',async() => {
    credentials.forEach(({userName, password}) => {
        it('Test 6: Check Subscribe block when put fail data',  async () => {
            await browser.url('/uber-uns/')
            await LoginPage.Login(userName, password)
            await LoginPage.btnSend.click()
            await browser.pause(3000)
            await console.log (await LoginPage.response.getText())
        });
    });
    
    it('Test 1: Check to Have Title',async() => {
        await browser.url('/uber-uns/')
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining('CasinoTop - Portal für alle österreichischen Casino Spieler')
        await $("link[rel='canonical']")
    });

    it('Test 2: Canonical', async () => {
        await browser.url('/uber-uns/')
        const canonical = await browser.$(`link[rel='canonical']`)
        await expect(canonical).toBePresent()
        const linkcanonical = await $(`link[rel='canonical']`)
        await expect(linkcanonical).toHaveLink(`${baseUrl}uber-uns/`)
    });

    xit('Test 6: Check Subscribe block when put fail data',  async () => {
        await LoginPage.Login("Test name for autotest", "automationtest@gmail.com")
        await LoginPage.btnSend.click()
        await browser.pause(3000)
        await console.log (await LoginPage.response.getText())
        //await console.log (await $(".wpcf7-response-output").getText())
        // await browser.waitUntil(async ()=>await $("select[name='menu-364']").getAttribute("value" === 'Send'),
        // {
        //     timeout: 5000,
        //     timeoutMsg: "The field is required."
        // })
    });

    it('Test 7: Check Subscribe block when put succses data',  async () => {
        await browser.url('/uber-uns/')
        await LoginPage.Login("Test name for autotest", "automationtest@gmail.com", "My automation message")
        const dropdown = await $("select.wpcf7-validates-as-required")
        await dropdown.selectByAttribute('value', 'PR/Guest Posting')
        await dropdown.selectByVisibleText('Support')
        await dropdown.selectByIndex(1)
        console.log(await dropdown.getValue())
        expectchai(await dropdown.getValue()).to.equal('Partnerships/Affiliate')
        await $("select > option:nth-child(2)").click()
        //await $("textarea[name='your-message']").setValue("My automation message")
        await browser.pause(3000)
        await LoginPage.btnSend.click()
        await browser.pause(5000)
        console.log (await LoginPage.response.getText())
        await expect(browser).toHaveUrlContaining("uber-uns")
        await expect(browser).toHaveTitle("CasinoTop - Portal für alle österreichischen Casino Spieler")
    });
    
});