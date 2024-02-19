
describe('Practice Login Tests', function () {
    beforeEach(function(done){
        browser.navigateTo('https://practicetestautomation.com/practice-test-login/');
    });

    it('Perform a Successful Login', function (browser) {
        var username = "student";
        var password = "Password123";
        
        browser
            .waitForElementVisible({
            selector: '#username',
            timeout: 10000,
            retryInterval: 200
        })
        .sendKeys('#username', [username])
        .waitForElementVisible({
            selector: '#password',
            timeout: 10000,
            retryInterval: 200
        })
        .sendKeys('#password', [password])
        .waitForElementVisible({
            selector: '#submit',
            timeout: 10000,
            retryInterval: 200
        })
        .click('#submit')
        .assert.urlContains('logged-in-successfully');
    });

    it('Failed Login based on username', function (browser) {
        var wrongUsername = "wrongStudent";
        var correctPassword = "Password123";

        browser
            .waitForElementVisible({
            selector: '#username',
            timeout: 10000,
            retryInterval: 200
        })
            .sendKeys('#username', [wrongUsername])
            .waitForElementVisible({
            selector: '#password',
            timeout: 10000,
            retryInterval: 200
        })
            .sendKeys('#password', [correctPassword])
            .waitForElementVisible({
            selector: '#submit',
            timeout: 10000,
            retryInterval: 200
        })
            .click('#submit')
            .assert.textContains('#error', 'Your username is invalid!');
    });
    
    it('Failed Login based on password', function (browser) {
        var correctUsername = "student";
        var wrongPassword = "Password321";

        browser
            .waitForElementVisible({
            selector: '#username',
            timeout: 10000,
            retryInterval: 200
        })
            .sendKeys('#username', [correctUsername])
            .waitForElementVisible({
            selector: '#password',
            timeout: 10000,
            retryInterval: 200
        })
            .sendKeys('#password', [wrongPassword])
            .waitForElementVisible({
            selector: '#submit',
            timeout: 10000,
            retryInterval: 200
        })
            .click('#submit')
            .assert.textContains('#error', 'Your password is invalid!');
    });
});
