class UnicodeDetector {
    get textArea () {
      return $('#msg-area');
    }
  
    get dangerCharacters () {
      return $$('[class*="danger"]:not([class*="legend"])');
    }
  
    get warningCharacters () {
      return $$('[class*="unicode-detector__char warning"]');
    }
  }
  export default new UnicodeDetector();
  