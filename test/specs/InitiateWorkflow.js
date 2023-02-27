const LoginPage = require('../pageobjects/Login.page') //This is for importing the instance of LoginPage class

const DashboardPage = require('../pageobjects/Dashboard.page') //This is for importing the instance of DashboardPage class

const InitiateWorkflowPage = require('../pageobjects/InitiateWorkflow.page') //This is for importing the instance of InitiateWorkflowPage class

const fs = require('fs') //This is for read JSON file

const LoginTestdata = JSON.parse(fs.readFileSync('test/TestData/LoginTestdata.json')) //This is for importing the instance of LoginTestData

const CategoryPage = require('../pageobjects/Category.page') //This is for importing the instance of CategoryPage class

const SubCategoryPage = require('../pageobjects/SubCategory.page') //This is for importing the instance of SubCategoryPage class

const ProductPage = require('../pageobjects/Product.page') //This is for importing the instance of ProductPage class

const CreateOrderTokensPage = require('../pageobjects/CreateOrderTokens.page') //This is for importing the instance of CreateOrderTokensPage class

const InitiateWorkflowTestdata = JSON.parse(fs.readFileSync('test/TestData/InitiateWorkflowTestdata.json')) //This is for importing the instance of SubCategoryTestData

describe('Initiate workflow', () =>{
  
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
        await DashboardPage.initiateWorkflow()
        await expect(browser).toHaveUrlContaining('createWorkflow')
    });

    //This it block is excute for validate Initiate workflow dropdown

    it('Validate Initiate workflow dropdown', async () => {

        await InitiateWorkflowPage.checkHeading('Initiate Workflow')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for ADD NEW button on the createWorkflow page

    it('Validate ADD NEW button on the createWorkflow page', async () => {

        await InitiateWorkflowPage.checkHeading('Initiate Workflow')
        await InitiateWorkflowPage.addNew()
        await InitiateWorkflowPage.Category(InitiateWorkflowTestdata[0].categoryName)
        await InitiateWorkflowPage.Submit()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate EDIT button on the createWorkflow page

    it('Validate EDIT button on the createWorkflow page', async () => {

        await InitiateWorkflowPage.checkHeading('Initiate Workflow')
        await InitiateWorkflowPage.Edit()
        await InitiateWorkflowPage.FilledCategory()
        await InitiateWorkflowPage.Submit()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate FILTERS button on the createWorkflow page

    it('Validate FILTERS button on the createWorkflow page', async () => {

        await InitiateWorkflowPage.checkHeading('Initiate Workflow')
        await InitiateWorkflowPage.Filters(InitiateWorkflowTestdata[0].categoryName)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate DELETE button on the createWorkflow page

    it('Validate DELETE button on the createWorkflow page', async () => {

        await InitiateWorkflowPage.checkHeading('Initiate Workflow')
        await InitiateWorkflowPage.Delete()
        await DashboardPage.logout('Logout')
    });
});

describe('Category', () =>{

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
        await DashboardPage.initiateWorkflow()
        await expect(browser).toHaveUrlContaining('createWorkflow')
    });

    //This it block is excute for validate Category button

    it('Validate Category button', async () => {

        await CategoryPage.Category()
        await CategoryPage.checkHeading('Category')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for ADD NEW button on the category page

    it('Validate ADD NEW button on the category page', async () => {

        await CategoryPage.Category()
        await CategoryPage.checkHeading('Category')
        await CategoryPage.addNew()
        await CategoryPage.CategoryBox(InitiateWorkflowPage[0].categoryName)
        await CategoryPage.Submit()
        await DashboardPage.logout('Logout')   
    });

    //This it block is excute for validate EDIT button on the category page

    it('Validate EDIT button on the category page', async () => {

        await CategoryPage.Category()
        await CategoryPage.checkHeading('Category')
        await CategoryPage.Edit()
        await CategoryPage.FilledCategory()
        await CategoryPage.Submit()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate FILTERS button on the category page

    it('Validate FILTERS button on the category page', async () => {

        await CategoryPage.Category()
        await CategoryPage.checkHeading('Category')
        await CategoryPage.Filters(InitiateWorkflowTestdata[0].categoryName)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate DELETE button on the category page

    it('Validate DELETE button on the category page', async () => {

        await CategoryPage.Category()
        await CategoryPage.checkHeading('Category')
        await CategoryPage.Delete()
        await DashboardPage.logout('Logout')
    });
});

describe('Sub-Category', () =>{

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
        await DashboardPage.initiateWorkflow()
        await expect(browser).toHaveUrlContaining('createWorkflow')
    });

    //This it block is excute for validate Sub-Category button

    it('Validate Sub-Category button', async () => {

        await SubCategoryPage.SubCategory()
        await SubCategoryPage.checkHeading('Sub Category')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate ADD NEW button on sub-category page

    it('Validate ADD NEW button on the sub-category page', async () => {

        await SubCategoryPage.SubCategory()
        await SubCategoryPage.checkHeading('Sub Category')
        await SubCategoryPage.addNew()
        await SubCategoryPage.Category()
        //await SubCategoryPage.CategorySelect(SubCategoryTestdata[0].categoryName)
        await SubCategoryPage.SubCategoryBox(InitiateWorkflowTestdata[0].subCategoryName)
        await SubCategoryPage.Submit()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate EDIT button on the category page

    it('Validate EDIT button on the sub-category page', async () => {

        await SubCategoryPage.SubCategory()
        await SubCategoryPage.checkHeading('Sub Category')
        await SubCategoryPage.Edit()
        await SubCategoryPage.FilledSubCategory()
        await SubCategoryPage.Submit()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate FILTERS button on the sub-category page

    it('Validate FILTERS button on the sub-category page', async () => {

        await SubCategoryPage.SubCategory()
        await SubCategoryPage.checkHeading('Sub Category')
        await SubCategoryPage.Filters(InitiateWorkflowTestdata[0].subCategoryName)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate DELETE button on the sub-category page

    it('Validate DELETE button on the sub-category page', async () => {

        await SubCategoryPage.SubCategory()
        await SubCategoryPage.checkHeading('Sub Category')
        await SubCategoryPage.Delete()
        await DashboardPage.logout('Logout')
    });
});

describe('Product', () =>{

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
        await DashboardPage.initiateWorkflow()
        await expect(browser).toHaveUrlContaining('createWorkflow')
    });

    //This it block is excute for validate Product button

    it('Validate Product button', async () => {

        await ProductPage.Product()
        await ProductPage.checkHeading('Product')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate ADD NEW button on product page

    it('Validate ADD NEW button on the product page', async () => {

        await ProductPage.Product()
        await ProductPage.checkHeading('Product')
        await ProductPage.addNew()
        await ProductPage.Category()
        await ProductPage.SubCategory()
        await ProductPage.ProductBox(InitiateWorkflowTestdata[0].productName)
        await ProductPage.Submit()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate EDIT button on the product page

    it('Validate EDIT button on the product page', async () => {

        await ProductPage.Product()
        await ProductPage.checkHeading('Product')
        await ProductPage.Edit()
        await ProductPage.FilledProduct()
        await ProductPage.Submit()
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate FILTERS button on the product page

    it('Validate FILTERS button on the product page', async () => {

        await ProductPage.Product()
        await ProductPage.checkHeading('Product')
        await ProductPage.Filters(InitiateWorkflowTestdata[0].productName)
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate DELETE button on the product page

    it('Validate DELETE button on the product page', async () => {

        await ProductPage.Product()
        await ProductPage.checkHeading('Product')
        await ProductPage.Delete()
        await DashboardPage.logout('Logout')
    });
});    

describe.only('Create Order Tokens', () =>{

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
        await DashboardPage.initiateWorkflow()
        await expect(browser).toHaveUrlContaining('createWorkflow')
    });

    //This it block is excute for validate create order tokens button

    it('Validate create order tokens button', async () => { 

        await CreateOrderTokensPage.CreateOrderTokens()
        await CreateOrderTokensPage.checkHeading('Create Order Tokens')
        await DashboardPage.logout('Logout')
    });

    //This it block is excute for validate create order tokens

    it('Validate create order tokens', async () => { 

        await CreateOrderTokensPage.CreateOrderTokens()
        await CreateOrderTokensPage.checkHeading('Create Order Tokens')
        await CreateOrderTokensPage.Category()
        
        await DashboardPage.logout('Logout')
    });
});    
