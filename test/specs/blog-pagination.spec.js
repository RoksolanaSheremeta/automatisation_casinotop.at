import { checkPaginationAfterChangingPage } from '../models/base.methods';
import Base from '../pageobjects/base.selectors';
import paginationSection from '../pageobjects/pagination.section';
import fetch from 'node-fetch';
/* global baseUrl */

describe('Pagination on the Blog page', () => {
  it('Check that the current (first) page in pagination is not clickable and the `previous` arrow is absent if the user is on the first page', async () => {
    const siteLink = await fetch(`${baseUrl}blog/`);
    if (siteLink.status === 200) {    
      await browser.url(`${baseUrl}blog/`);
      await expect(paginationSection.currentPageNumber).toHaveText('1');
      await expect(paginationSection.currentPageNumber).not.toHaveAttr('href');
      await expect(paginationSection.previousPageNumberArrow).not.toExist();
    } else {
      console.log('The website has no Blog page');
    }
  });
  
  it('Check that it`s possible to navigate through pages', async () => {
    const siteLink = await fetch(`${baseUrl}blog/`);
    if (siteLink.status === 200) {    
      await browser.url(`${baseUrl}blog/`);
      await expect(paginationSection.paginationPageNumber[0]).toHaveText('2');
      await Base.closeCookiePopupBtn.click();
      await paginationSection.paginationPageNumber[0].click();
      await checkPaginationAfterChangingPage('2');
      await paginationSection.lastPageNumberArrow.click();
      await checkPaginationAfterChangingPage('3');
      await paginationSection.previousPageNumberArrow.click();
      await checkPaginationAfterChangingPage('2');
    } else {
      console.log('The website has no Blog page');
    }
  });
});
