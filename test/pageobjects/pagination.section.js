class Pagination {
  get paginationPageNumber () {
    return $$('a[class="page-numbers"]');
  }

  get currentPageNumber () {
    return $('span[class="page-numbers current"]');
  }

  get previousPageNumberArrow () {
    return $('a[class="prev page-numbers"]');
  }

  get lastPageNumberArrow () {
    return $('a[class="next page-numbers"]');
  }
}  
export default new Pagination();