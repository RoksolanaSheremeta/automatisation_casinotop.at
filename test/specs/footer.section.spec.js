import testData from '../helpers/test-data.js';
import FrontPage from '../pageobjects/front-pages.selectors.js';
import { visitMainPageByUrl, waitForElement } from '../models/base.methods.js';

describe('Footer tests for testcasinos.org', () => {

  beforeEach('Pre-conditions', async () => {
    await visitMainPageByUrl();
  });

  it('Check that the footer is present and displayed on the Home page', async () => {
    await expect(FrontPage.footer.footerBlock()).toBeDisplayed();
  });

  it('Make sure that blocks with menus are present and have titles', async () => {
    await expect(FrontPage.footer.menuSections()).toBeExisting();
    await FrontPage.footer.menuSections()[0].scrollIntoView();

    // Перевіряємо, що футер містить заголовки секцій
    const sectionTitlesLength = await FrontPage.footer.sectionsTitles().length;
    if (sectionTitlesLength !== 0 && sectionTitlesLength !== undefined) {
      await expect(FrontPage.footer.sectionsTitles()).toBeDisplayed();
    }

    // Перевіряємо, що всі пункти меню мають атрибут href
    const menuItems = await FrontPage.footer.menuItems();
    for (let index = 0; index < menuItems.length; index++) {
      await expect(menuItems[index]).toHaveAttribute(testData.attributes.href);
    }
  });

  it('Make sure that copyright data is displayed in footer', async () => {
    await expect(FrontPage.footer.footerBlock()).toBeDisplayed();
    await FrontPage.footer.footerBlock().scrollIntoView({block: 'center'});

    const copyrightElements = await FrontPage.footer.copyrightText();
    if (copyrightElements.length > 1 && await copyrightElements[1].isExisting()) {
      let copyrightElem = copyrightElements[1];
      await browser.fullscreenWindow();
      await expect(copyrightElem).toBeDisplayed();
      await expect(copyrightElem).toHaveTextContaining(testData.copyrightText + new Date().getFullYear());
    }
  });

  it('Make sure that all images in the footer are displayed', async () => {
    await waitForElement(FrontPage.footer.footerBlock());
    await FrontPage.footer.footerBlock().scrollIntoView({block: 'center'});

    const footerIcons = await FrontPage.footer.icons();
    if (footerIcons.length < 1) {
      console.log('There are no images in footer');
    } else {
      await expect(footerIcons).toBeExisting();

      for (let i = 0; i < footerIcons.length; i++) {
        const height = await footerIcons[i].getSize('height');
        const srcAttr = await footerIcons[i].getAttribute(testData.attributes.src);

        expect(height).toBeGreaterThan(0);
        expect(srcAttr).toBeTruthy(); // Перевіряємо на наявність src
      }
    }
  });
});
