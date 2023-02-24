const LoginPage = require('../pageobjects/Login.page') //This is for importing the instance of LoginPage class

const DashboardPage = require('../pageobjects/Dashboard.page') //This is for importing the instance of DashboardPage class

const fs = require('fs') //This is for read JSON file

const LoginTestdata = JSON.parse(fs.readFileSync('test/TestData/LoginTestdata.json')) //This is for importing the instance of LoginTestData

const OrderTokenTablesPage = require('../pageobjects/OrderTokenTables.page') //This is for importing the instance of OrderTokenTablePage class

const ProductPage = require('../pageobjects/Product.page') //This is for importing the instance of ProductPage class

const CreateBulkTokensPage = require('../pageobjects/CreateBulkTokens.page') //This is for importing the instance of CreateBulkTokensPage class

const DistributorPage = require('../pageobjects/Distributor.page') //This is for importing the instance of DistributorPage class

const CategoryPage = require('../pageobjects/Category.page') //This is for importing the instance of CategoryPage class

const SubCategoryPage = require('../pageobjects/SubCategory.page') //This is for importing the instance of SubCategoryPage class

const UploadBulkTokensPage = require('../pageobjects/UploadBulkTokens.page') //This is for importing the instance of UploadBulkTokensPage class

//const RetailerPage = require('../pageobjects/Retailer.page') //This is for importing the instance of RetailerPage class
describe('Dashboard', () => {

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

    //This it block is excute for validate token count button

    it('Validate token count button', async () => {

        await DashboardPage.tokenCount()
        await expect(browser).toHaveUrlContaining('tokens')
        await OrderTokenTablesPage.checkHeading('Order Token Tables')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate product count button

    it('Validate product count button', async () => {

        await DashboardPage.productCount()
         await expect(browser).toHaveUrlContaining('product')
        await ProductPage.checkHeading('Product')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate blank token count button

    it('Validate blank token count button', async () => {

        await DashboardPage.blankTokenCount()
        await expect(browser).toHaveUrlContaining('publishBulkArt')
        await CreateBulkTokensPage.checkHeading('Create Bulk Tokens')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate distributor button

    it('Validate distributor button', async () => {

        await DashboardPage.distributor()
        await expect(browser).toHaveUrlContaining('distributer')
        await DistributorPage.checkHeading('Distributor Table')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate category bookmark

    it('Validate category bookmark', async () => {

        await DashboardPage.category()
        await expect(browser).toHaveUrlContaining('category')
        await CategoryPage.checkHeading('Category')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate sub-category bookmark

    it('Validate sub-category bookmark', async () => {

        await DashboardPage.subCategory()
        await expect(browser).toHaveUrlContaining('sub-category')
        await SubCategoryPage.checkHeading('Sub Category')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate product bookmark

    it('Validate product bookmark', async () => {

        await DashboardPage.product()
        await expect(browser).toHaveUrlContaining('product')
        await ProductPage.checkHeading('Product')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate bulk tokens bookmarks

    it('Validate create bulk tokens bookmark', async () => {

        await DashboardPage.createBulkTokens()
        await expect(browser).toHaveUrlContaining('publishBulkArt')
        await CreateBulkTokensPage.checkHeading('Create Bulk Tokens')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate upload bulk tokens bookmark

    it('Validate upload bulk tokens bookmark', async () => {

        await DashboardPage.uploadBulkTokens()
        await expect(browser).toHaveUrlContaining('uploadBulkData')
        await UploadBulkTokensPage.checkHeading('Upload Bulk Data')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate track tokens bookmark

    it('Validate track tokens bookmark', async () => {

        await DashboardPage.trackTokens()
        await expect(browser).toHaveUrlContaining('tokens')
        await OrderTokenTablesPage.checkHeading('Order Token Tables')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate retailer button

    /*it('Validate retailer button', async () => {

        await DashboardPage.retailer()
        await expect(browser).toHaveUrlContaining('')
        await RetailerPage.checkHeading('')
        await DashboardPage.logout('Logout')
    });*/
});    