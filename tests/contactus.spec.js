const { ok } = require("assert");

describe('Automation Exercise contact us form', function () {
    beforeEach(function (done) {
        browser.navigateTo('https://automationexercise.com');
        browser.maximizeWindow();
    });

    it('submit form successfully', function (browser) {
        var name = "Automation Tester";
        var email = "automation.tester@training.com";
        var subject = "Automation Exercise";
        var message = "This is helping me to learn how to write better automation tests.";

        browser
            .waitForElementVisible({
                selector: 'a[href="/contact_us"]',
                timeout: 10000,
                retryInterval: 200
            })
            .click({
                selector: 'a[href="/contact_us"]',
            })
            .waitForElementVisible({
                selector: 'input[data-qa="name"]',
                timeout: 10000,
                retryInterval: 200
            })
            .sendKeys('input[data-qa="name"]', [name])
            .waitForElementVisible({
                selector: 'input[data-qa="email"]',
                timeout: 10000,
                retryInterval: 200
            })
            .sendKeys('input[data-qa="email"]', [email])
            .waitForElementVisible({
                selector: 'input[data-qa="subject"]',
                timeout: 10000,
                retryInterval: 200
            })
            .sendKeys('input[data-qa="subject"]', [subject])
            .waitForElementVisible({
                selector: '#message',
                timeout: 10000,
                retryInterval: 200
            })
            .sendKeys('#message', [message])
            .waitForElementVisible({
                selector: 'input[data-qa="submit-button"]',
                timeout: 10000,
                retryInterval: 200
            })
            .execute('window.scrollTo(0,document.body.scrollHeight);')
            .click({

                selector: 'input[data-qa="submit-button"]'

            })
            .alerts.accept()
            .assert.visible('div[class="status alert alert-success"]');
    });
});