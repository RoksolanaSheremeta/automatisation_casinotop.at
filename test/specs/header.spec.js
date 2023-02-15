import { checkThatImageIsNotBroken } from '../models/base.methods.js';
import HeaderSection from '../pageobjects/header.section'

describe('Header tests', () => {
    /* global baseUrl */

    beforeEach('Pre-conditions', () => {
        browser.url(baseUrl)
    });

    it('Test 1: Check to Have Title', async() => {
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining('Online Casino Österreich 🛡️ Die besten Casinos im Test 2023')
        await $("link[rel='canonical']")
    });

    it('Test 2: Canonical', async () => {
        const canonical = await browser.$(`link[rel='canonical']`)
        await expect(canonical).toBePresent()
        const linkcanonical = await $(`link[rel='canonical']`)
        await expect(linkcanonical).toHaveLink('https://casinotop.at/')
    });

    it.only('Test 3: Check that logo is present in header, the width and height is more than 0px and it is clickable', async () => {
        await expect(HeaderSection.logoIcon).toBeDisplayed()
        const srcAttr = await HeaderSection.logoIcon.getAttribute('src')
        expect(srcAttr).not.toBe(null || '')
        checkThatImageIsNotBroken(HeaderSection.logoIcon)
        await expect(HeaderSection.logoIconClickable).toBeExisting()
    });

    it('Test 4: Logo redirection', async () => {
        await browser.$("a[title='CasinoTop AT']").click()
        const logoredirectionUrlExp = await expect(browser);
        await logoredirectionUrlExp.toHaveUrl("https://casinotop.at/");
        await browser.saveScreenshot("screenshot.png")
    });

    it('Test 5: Check header menu', async () => {
        await $("#menu-item-8270").scrollIntoView()
        await $("#menu-item-8270").moveTo()
        await $("=Echtgeld Casinos").click()
        await expect(browser).toHaveUrlContaining("echtgeld-casinos")
        await $("#menu-item-4935").moveTo()
        await $("=€5 Einzahlen").click()
        await expect(browser).toHaveUrlContaining("5-euro-casino")
        await $("#menu-item-7601").moveTo()
        await $("=Sofortuberweisung").click()
        await expect(browser).toHaveUrlContaining("zahlungsmethoden/sofortuberweisung-casinos/")
        await $("#menu-item-11761").moveTo()
        await $("=N1 Casino").click()
        await expect(browser).toHaveUrlContaining("casino-test/n1-casino")
    });

    it('Test 6: Check that the lang button is present', async () => {
        const LangButton = await browser.$("#menu-item-wpml-ls-2-de") 
        await expect(LangButton).toBePresent();
    });

    it('Test 7: Check alt and src attributes in the lang element', async () => {
        const altArrt = await browser.$("#menu-item-wpml-ls-2-de");
        const srcAttr = await browser.$("#menu-item-wpml-ls-2-de");
        expect(altArrt).not.toBe(null || '');
        expect(srcAttr).not.toBe(null || '');
    });

    it('Test 8: Check menu lang and text', async () => {
        await $("#menu-item-wpml-ls-2-de").scrollIntoView()
        await $("#menu-item-wpml-ls-2-de").moveTo()
        await $("#menu-item-wpml-ls-2-de_en-nz").click()
        console.log(await $("h1").getText())
    });

    xit('Test 9: Check table', async () => {
        //await browser.url("https://casinotop.at/")
        //await browser.setWindowSize(1552, 840)
        await $("//figure[2]//table[1]//thead[1]//tr[1]//th[1]").getText()
        const veggieLocators = await $$("figure:nth-child(19) > table > tbody:nth-child(3) > tr> td:nth-child(1)")
        await veggieLocators.map(veggie=> veggie.getText())
    });
});
  