const config = require('./config/config');

module.exports ={
    timeout: config.timeout,

    use: {
        baseURL: config.baseurl,
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry',
        parallel: false
    },

    projects: [
        {
            name: 'chromium',
            use: {
                browserName: 'chromium',
                channel: 'chrome'
            }
        }

    ],

    reporter: [['html'],['allure-playwright',{ outputFolder: 'allure-results' }]]
}