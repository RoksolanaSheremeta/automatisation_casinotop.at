/* eslint-disable */
exports.config = {

    runner: 'local',
    
    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    windowSize: {
        width: 1440,
        height: 900
    },
 
    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
          args: [
              '--no-sandbox',
              '--disable-infobars',
              // '--headless',
              '--disable-gpu',
              'incognito',
              'disable-extensions',
              '--disable-dev-shm-usage'
          ],
      }

    }],
  
    logLevel: 'info',
    bail: 0,
    
    baseUrl: 'https://casinotop.co.nz/',

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
        
    },

    // =====
    // Hooks
    // =====
  before: function (config, capabilities, specs) {
    browser.deleteCookies();
    global.baseUrl = this.baseUrl;
    require('expect-webdriverio').setOptions({ wait: 5000 });
    const windowSize = browser.config.windowSize;
    browser.setWindowSize(windowSize.width, windowSize.height);
  },
  afterTest: function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      // addAttachment('screenshot', browser.saveScreenshot(`./_results_/allure-raw/${new Date().getTime()}.png`));
    }
  },
};
