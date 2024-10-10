describe('Simple Test', () => {
    it('should open the homepage', async () => {
        await browser.url('https://testcasinos.org/');
        const title = await browser.getTitle();
        console.log(title);
    });
});
