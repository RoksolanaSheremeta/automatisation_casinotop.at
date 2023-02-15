describe('Footer Section',async() => {
    beforeEach( async() => {
        await browser.url('https://casinotop.at/')
        await browser.setWindowSize(1552, 840)
    });

    it('Test 1: Footer column TOP SEITEN and title', async () => {
        await $(".footer_new-list.relative").scrollIntoView()
        console.log(await $("div.footer_new-list.relative > div:nth-child(1) > span").getText())
        await expect($("div.footer_new-list.relative > div:nth-child(1) > span")).toHaveText("TOP SEITEN")
        await browser.$("#menu-item-14166").click()
        console.log(await $("h1").getText())
        await expect($("h1")).toHaveTextContaining("Online Casino schnelle Auszahlung Österreich")
    });

    it('Test 2: Footer column CASINO SPIELE and title', async () => {
        await $(".footer_new-list.relative").scrollIntoView()
        console.log(await $("div.footer_new-list.relative > div:nth-child(2) > span").getText())
        await expect($("div.footer_new-list.relative > div:nth-child(2) > span")).toHaveText("CASINO SPIELE")
        await browser.$("#menu-item-14170").click()
        console.log(await $("h1").getText())
        await expect($("h1")).toHaveTextContaining("Online Casino Merkur")
    });

    it('Test 3: Footer column ÜBER UNS and title', async () => {
        await $(".footer_new-list.relative").scrollIntoView()
        console.log(await $("div.footer_new-list.relative > div:nth-child(4) > span").getText())
        await expect($("div.footer_new-list.relative > div:nth-child(4) > span")).toHaveText("ÜBER UNS")
        await browser.$("#menu-item-13244").click()
        console.log(await $("h1").getText())
        await expect($("h1")).toHaveTextContaining("Über uns")
    });

    it('Test 4: Check alt and src attributes in the lang element', async () => {
        const altArrt = await browser.$("(//ul[@class='footer-nav'])[3]")
        const srcAttr = await browser.$("(//ul[@class='footer-nav'])[3]")
        expect(altArrt).not.toBe(null || '')
        expect(srcAttr).not.toBe(null || '')
    });

    it('Test 5: Check menu lang and text', async () => {
        await $("(//ul[@class='footer-nav'])[3]").scrollIntoView()
        await $("#menu-item-wpml-ls-599-de_en-nz").click()
        console.log(await $("h1").getText())
        await expect(browser).toHaveUrlContaining("nzcasimile")
    });

    it('Test 6: Check Copyright', async () => {
        await $(".footer_new-copy.relative").scrollIntoView()
        console.log(await $(".footer_new-copy.relative").getText())
        await expect($(".footer_new-copy.relative")).toHaveTextContaining("© Copyright 2023 – Casinotop.at")
    });

    it('Test 7: Check footer logos and title', async () => {
        await $(".space-footer-bottom").scrollIntoView()
        await $("a[href='https://www.gpwa.org/']").click()
        //await expect(browser).toHaveUrlContaining("gpwa")
        //console.log(await browser.getTitle())
        await browser.closeWindow()
    });
});