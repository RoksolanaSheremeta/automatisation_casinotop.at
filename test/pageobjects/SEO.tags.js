class SEOtags {
  get h1Tag () {
    return $('div h1');
  }

  get h2Tag () {
    return $$('div h2');
  }

  get h3Tag () {
    return $$('div h3');
  }

  get h4Tag () {
    return $$('div h4');
  }

  get h5Tag () {
    return $$('div h5');
  }
  
  get h6Tag () {
    return $$('div h6');
  }

  get description () {
    return $('meta[name="description"]');
  }

  get canonical () {
    return $('head [rel="canonical"]');
  }
}  
export default new SEOtags();
  