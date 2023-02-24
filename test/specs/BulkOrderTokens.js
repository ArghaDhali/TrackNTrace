const LoginPage = require('../pageobjects/Login.page') //This is for importing the instance of LoginPage class

const DashboardPage = require('../pageobjects/Dashboard.page') //This is for importing the instance of DashboardPage class

const fs = require('fs') //This is for read JSON file

const LoginTestdata = JSON.parse(fs.readFileSync('test/TestData/LoginTestdata.json')) //This is for importing the instance of LoginTestData

describe('Bulk Order Tokens', () => {

    //This will execute before each test
    beforeEach(async () => {
        await browser.url("https://trackandtracee.azurewebsites.net/")
        await expect(browser).toHaveUrlContaining('trackandtrace')
        await browser.pause(1000)
        await browser.maximizeWindow()
        await LoginPage.login(LoginTestdata[0].email, LoginTestdata[0].password)
        await expect(browser).toHaveUrlContaining('dashboard')
        await browser.pause(1000)
        await DashboardPage.checkHeading('Track & Trace')
        await browser.pause(1000)
    });

    //This it block is excute for validate create bulk order tokens button

    it('Validate create bulk order tokens button', async () => {

        await DashboardPage.blankTokenCount()
    });
});