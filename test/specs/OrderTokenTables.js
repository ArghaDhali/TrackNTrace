const LoginPage = require('../pageobjects/Login.page') //This is for importing the instance of LoginPage class
const DashboardPage = require('../pageobjects/Dashboard.page') //This is for importing the instance of DashboardPage class
const OrderTokenTablesPage = require('../pageobjects/OrderTokenTables.page') //This is for importing the instance of OrderTokenTablesPage class 
const FilledUnassignedTokensPage = require('../pageobjects/FilledUnassignedTokens.page') //This is for importing the instance of FilledUnassignedTokensPage class 
const fs = require('fs') //This is for read JSON file
const LoginTestdata = JSON.parse(fs.readFileSync('test/TestData/LoginTestdata.json')) //This is for importing the instance of LoginTestData
const OrderTokenTablesTestdata = JSON.parse(fs.readFileSync('test/TestData/OrderTokenTablesTestdata.json')) //This is for importing the instance of OrderTokenTablesTestdata
//const QRCode = require('qr-image')

describe('Order Tokens Tables', () => {

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
        await DashboardPage.OrderTokenTables()
        await expect(browser).toHaveUrlContaining('tokens')
    });

    //This it block is excute for validate order tokens tables button
    it('TC_TrackNTrace_OrderTokenTable_001_Validate order tokens tables button', async () => {
        report.addTestId(OrderTokenTablesTestdata[0].TestCaseID)
        await OrderTokenTablesPage.checkHeading('Order Token Tables')
        await DashboardPage.logout('Logout')
    });
});

describe.only('Filled Unassigned Tokens', () => {

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
        await DashboardPage.OrderTokenTables()
        await expect(browser).toHaveUrlContaining('tokens')
        await OrderTokenTablesPage.checkHeading('Order Token Tables')
    });

    //This it block is excute for validate expand rows button on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_002_Validate expand rows button on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[1].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.ExpandRowsButton()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate select rows button on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_003_Validate select rows button on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[2].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.SelectRowsButton()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate that distributor dropdown on the Filled unassigned Tokens Table has all unassigned values
    it('TC_TrackNTrace_OrderTokenTable_004_Validate that distributor dropdown on the Filled unassigned Tokens Table has all unassigned values', async () => {
        report.addTestId(OrderTokenTablesTestdata[3].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.SelectRowsButton()
        await FilledUnassignedTokensPage.DistributorDropdown()
        await DashboardPage.logout('Logout')
    });

    
    //This it block is excute for validate token id search box on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_006_Validate token id search box on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[5].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.TokenId(OrderTokenTablesTestdata[5].tokenid)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate batch no search box on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_007_Validate batch no search box on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[6].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.BatchNo(OrderTokenTablesTestdata[6].batchno)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate category search box on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_008_Validate category search box on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[7].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.Category(OrderTokenTablesTestdata[7].category)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate sub-category search box on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_009_Validate sub-category search box on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[8].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.SubCategory(OrderTokenTablesTestdata[8].subcategory)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate product search box on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_010_Validate product search box on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[9].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.Product(OrderTokenTablesTestdata[9].product)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate AddTxn button on the Filled unassigned Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_011_Validate AddTxn button on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[10].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.AddTxnButton()

        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate View button on the Filled unassigned Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_012_Validate View button on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[11].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.ViewButton()

        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate ViewTxn button on the Filled unassigned Tokens Table
    it.skip('TC_TrackNTrace_OrderTokenTable_013_Validate ViewTxn button on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[12].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.ViewTxnButton()

        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate page box on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_014_Validate page box on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[13].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.PageValidation(OrderTokenTablesTestdata[13].pagenumber)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate show dropdown on the Filled unassigned Tokens Table
    it('TC_TrackNTrace_OrderTokenTable_015_Validate show dropdown on the Filled unassigned Tokens Table', async () => {
        report.addTestId(OrderTokenTablesTestdata[14].TestCaseID)
        await FilledUnassignedTokensPage.checkHeading('FILLED UNASSIGNED TOKENS')
        await FilledUnassignedTokensPage.ShowValidation(OrderTokenTablesTestdata[14].Show)
        await DashboardPage.logout('Logout')
    }); 
}); 