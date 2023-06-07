class UnicodeDetector {
    get textArea () {
      return $('#msg-area');
    }
  
    get dangerCharacters () {
      return $$('[class*="danger"]');
    }
  
    get warningCharacters () {
      return $$('[class*="warning"]');
    }
  }
export default new UnicodeDetector();
  