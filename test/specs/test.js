describe('Footer Section',async() => {

    beforeEach('Pre-conditions', async() => {
        await browser.url(baseUrl)
    });

    it('Test 1: Check sidebar', async () => {
        const sidebar = await $(".space-sidebar-section")
        await expect(sidebar).toBeDisplayed()
        console.log(await ($(".space-sidebar-section")).getText())
        await expect($(".space-block-title.relative")).toHaveTextContaining("Top 5 Casinos")
    });

    it('Test 2: Check sidebar redirection', async () => {
        const sidebar = await $$(".space-companies-sidebar-item.box-100.relative.to_casino_k")
        const list = sidebar[1]
        await list.click()
        browser.pause(3000)
    });

    it('Test 3: Check frame ', async () => {
        const wpml = await $$(".menu-item-lang")
        const userDropdown = wpml[2]
        await userDropdown.click()
    });

    // it('Test 2: Footer column CASINO SPIELE and title', async () => {
    //     await $(".footer_new-list.relative").scrollIntoView()
    //     console.log(await $("div.footer_new-list.relative > div:nth-child(2) > span").getText())
    //     await expect($("div.footer_new-list.relative > div:nth-child(2) > span")).toHaveText("CASINO SPIELE")
    //     await browser.$("#menu-item-14170").click()
    //     console.log(await $("h1").getText())
    //     await expect($("h1")).toHaveTextContaining("Online Casino Merkur")
    // });

    // it('Test 3: Footer column ÜBER UNS and title', async () => {
    //     await $(".footer_new-list.relative").scrollIntoView()
    //     console.log(await $("div.footer_new-list.relative > div:nth-child(4) > span").getText())
    //     await expect($("div.footer_new-list.relative > div:nth-child(4) > span")).toHaveText("ÜBER UNS")
    //     await browser.$("#menu-item-13244").click()
    //     console.log(await $("h1").getText())
    //     await expect($("h1")).toHaveTextContaining("Über uns")
    // });

    // it('Test 4: Check alt and src attributes in the lang element', async () => {
    //     const altArrt = await browser.$("(//ul[@class='footer-nav'])[3]")
    //     const srcAttr = await browser.$("(//ul[@class='footer-nav'])[3]")
    //     expect(altArrt).not.toBe(null || '')
    //     expect(srcAttr).not.toBe(null || '')
    // });

    // it('Test 8: Check menu lang and text', async () => {
    //     await $("(//ul[@class='footer-nav'])[3]").scrollIntoView()
    //     await $("#menu-item-wpml-ls-599-de_en-ie_en-nz_de-ch").click()
    //     console.log(await $("h1").getText())
    //     await expect(browser).toHaveUrlContaining("schweizercasinoclub")
    // });

    // it('Test 9: Check Copyright', async () => {
    //     await $(".footer_new-copy.relative").scrollIntoView()
    //     console.log(await $(".footer_new-copy.relative").getText())
    //     await expect($(".footer_new-copy.relative")).toHaveTextContaining("© Copyright 2022 – Casinotop.at")
    // });
});