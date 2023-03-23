const LoginPage = require('../pageobjects/Login.page') //This is for importing the instance of LoginPage class
const DashboardPage = require('../pageobjects/Dashboard.page') //This is for importing the instance of DashboardPage class
const CreateBulkOrderTokensPage = require('../pageobjects/CreateBulkOrderTokens.page') //This is for importing the instance of CreateBulkTokensPage class
const UploadBulkDataPage = require('../pageobjects/UploadBulkData.page') //This is for importing the instance of UploadBulkDataPage class
const fs = require('fs') //This is for read JSON file
const LoginTestdata = JSON.parse(fs.readFileSync('test/TestData/LoginTestdata.json')) //This is for importing the instance of LoginTestData
const BulkOrderTokensTestdata = JSON.parse(fs.readFileSync('test/TestData/BulkOrderTokensTestdata.json')) //This is for importing the instance of BulkOrderTokensTestdata

describe('Create Bulk Order Tokens', () => {

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
        await DashboardPage.BulkOrderTokens()
        await browser.pause(1000)
        await DashboardPage.CreateBulkOrderTokens()
        await expect(browser).toHaveUrlContaining('publishBulkArt')
    });

    //This it block is excute for validate create bulk order tokens button
    it('TC_TrackNTrace_BulkOrderTokens_001_Validate create bulk order tokens button', async () => {
       report.addTestId(BulkOrderTokensTestdata[0].TestCaseID)
       await CreateBulkOrderTokensPage.checkHeading('Create Bulk Tokens')
       await DashboardPage.logout('Logout') 
    });

    //This it block is excute for validate reset button

    it('TC_TrackNTrace_BulkOrderTokens_002_Validate reset button', async () => {
       report.addTestId(BulkOrderTokensTestdata[1].TestCaseID)
       await CreateBulkOrderTokensPage.checkHeading('Create Bulk Tokens')
       await CreateBulkOrderTokensPage.BulkTokenNumber()
       await CreateBulkOrderTokensPage.ResetButton()
       await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate 
});

describe('Upload Bulk Data', () => {

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
        await DashboardPage.BulkOrderTokens()
        await browser.pause(1000)
        await DashboardPage.UploadBulkData()
        await expect(browser).toHaveUrlContaining('uploadBulkData')
    });

    //This it block is excute for validate upload bulk data button

    it('TC_TrackNTrace_BulkOrderTokens_007_Validate upload bulk data button', async () => {
       report.addTestId(BulkOrderTokensTestdata[6].TestCaseID)
       await UploadBulkDataPage.checkHeading('Upload Bulk Data')
       await DashboardPage.logout('Logout') 
    });
});
