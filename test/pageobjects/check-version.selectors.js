class CheckVersion {
    domainName (url) {
      return $(`h4*=${url}`);
    }
    
    domainVersion (url) {
      return $(`h4*=${url}`).parentElement()
        .parentElement()
        .parentElement()
        .parentElement()
        .$(':nth-child(2)');
    }
  }
  export default new CheckVersion();