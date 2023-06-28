class Polylang {
    get newNetButton () {
      return $('a*=New net');
    }
      
    sitesCell (url) {
      return $(`td*=${url}`);
    }
  
    get linksListCellsInTable () {
      return $$('table:nth-child(2) tr td:nth-child(2)');
    }
    
    showButton (url) {
      return $(`td*=${url}`).parentElement()
        .$('div a');
    }
    
    get editNetButton () {
      return $('a*=Edit net');
    }
    
    siteInput (link) {
      return $(`input[value*="${link}"]`);
    }
    
    get altFlag () {
      return 'input[class*="flag-alt-field"]';
    }
    
    get titleFlag () {
      return '[name="sites[flags-title][]"]';
    }
  
    get editButtonInPagesTable () {
      return $$('[class*="btn btn-secondary mx-2"]');
    }
  
    get linkOnEditGroupPage () {
      return $$('input[placeholder="URL"]');
    }
  
    get altFlagInLinksGroupPage () {
      return $$('[name*="[flagAlt]"]');
    }
  
    get titleFlagInLinksGroupPage () {
      return $$('[name*="[flagTitle]"]');
    }
  
    get showAllButton () {
      return $ ('a*=Show all');
    }
  
    get flagImageUrl () {
      return 'input[class*="url-to-flag-field"]';
    }
  
    get inputsRowsOnEditNetPage () {
      return $$('[class=" inputs-row sites-data-row"]');
    }
  
    get siteInputsOnEditPage () {
      return $$('input[class*="link-field"]');
    }
  
    get updateLinksButton () {
      return $('button*=Update links');
    }
  
    get successAlerts () {
      return $$('[class*="alert alert-success"]');
    }
  
    get failedAllert () {
      return $$('[class*="alert alert-danger"]');
    }
  
    get updateSitemapsButton () {
      return $('button*=Update sitemaps');
    }
  
    get cloakedUrlsInputs () {
      return $$('input[name*="sites[cloaked_urls"]');
    }
  
    get cloakingStatus () {
      return $$('tbody tr:last-of-type td:last-of-type')[0];
    }
  }
export default new Polylang();
    