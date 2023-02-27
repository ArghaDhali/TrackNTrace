const LoginPage = require('../pageobjects/Login.page') //This is for importing the instance of LoginPage class

const DashboardPage = require('../pageobjects/Dashboard.page') //This is for importing the instance of DashboardPage class

const ResetPasswordPage = require('../pageobjects/ResetPassword.page') //This is for importing the instance of ResetPasswordPage class

const RegisterPage = require('../pageobjects/Register.page') //This is for importing the instance of RegisterPage class

const fs = require('fs') //This is for read JSON file

const LoginTestdata = JSON.parse(fs.readFileSync('test/TestData/LoginTestdata.json')) //This for importing the instance of LoginData

describe.only('Login', () => {

    //This will execute before each test
    beforeEach(async () => {
        await browser.url("https://trackandtracee.azurewebsites.net/")
        await expect(browser).toHaveUrlContaining('trackandtrace')
        await browser.pause(2000)
        await browser.maximizeWindow()
    });

    //This it block is excute for validate login

    it('Validate Login', async () => {

        await LoginPage.login(LoginTestdata[0].email, LoginTestdata[0].password)
        await expect(browser).toHaveUrlContaining('dashboard')
        await browser.pause(2000)

        await expect(browser).toHaveUrlContaining('dashboard')
        await DashboardPage.checkHeading('Track & Trace')
        await DashboardPage.logout('Logout')
        await browser.pause(2000)
    });

    //This it block is excute for validate login with wrong email

    it('Validate Login with wrong Email', async () => {

        await LoginPage.login(LoginTestdata[1].email, LoginTestdata[1].password)
        await browser.pause(2000)
    });

    //This it block is excute for validate login with wrong password

    it('Validate Login with wrong Password', async () => {

        await LoginPage.login(LoginTestdata[2].email, LoginTestdata[2].password)
        await browser.pause(2000)
    });

    //This it block is excute for validate that email field is mandatory

    it('Validate that Email field is mandatory', async () => {
        
        await LoginPage.login(LoginTestdata[3].email, LoginTestdata[3].password)
        await browser.pause(2000)

        await LoginPage.emailIsMandatory('Email is required')
    });

    //This it block is excute for validate that password field is mandatory

    it('Validate that Password field is mandatory', async () => {
 
        await LoginPage.login(LoginTestdata[4].email, LoginTestdata[4].password)
        await browser.pause(2000)
        await LoginPage.passwordIsMandatory('Password is required')
    });

    //This it block is excute for validate remember me with select check box

    it('Validate Remember me with select check box', async () => {

        await LoginPage.login(LoginTestdata[5].email, LoginTestdata[5].password)
        await DashboardPage.checkHeading('Track & Trace')
        await DashboardPage.logout('Logout')
        await browser.pause(2000)
    });

    //This it block is excute for validate forget password link

    it('Validate Forget Password link', async () => {

        await LoginPage.forgetPassword()
        await ResetPasswordPage.login(LoginTestdata[6].email, LoginTestdata[6].password)
        await DashboardPage.checkHeading('Track & Trace')
        await DashboardPage.logout('Logout')
        await browser.pause(2000)
    });

    //This it block is excute for validate the get started button

    it('Validate the Get started button', async () => {

        await LoginPage.register()
        await browser.pause(2000)

        await expect(browser).toHaveUrlContaining('register')
        await RegisterPage.checkHeading('Register to Track And Trace')
    });
});
