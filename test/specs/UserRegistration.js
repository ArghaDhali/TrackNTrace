const LoginPage = require('../pageobjects/Login.page') //This is for importing the instance of LoginPage class

const RegisterPage = require('../pageobjects/Register.page') //This is for importing the instance of RegisterPage class

const fs = require('fs') //This is for read JSON file

const UserRegistrationTestdata = JSON.parse(fs.readFileSync('test/TestData/UserRegistrationTestdata.json')) //This is for importing the instance of UserRegistrationTestData

describe('User Resgistration', () => {

    //This will execute before each test
    beforeEach(async () => {
        await browser.url("https://trackandtracee.azurewebsites.net/")
        await expect(browser).toHaveUrlContaining('trackandtrace')
        await browser.pause(2000)
        await browser.maximizeWindow()
        await LoginPage.register()
        await browser.pause(2000)
        await expect(browser).toHaveUrlContaining('register')
    });

    //This it block is excute for register user with valid details
    
    it('Register user with valid details', async () =>{

        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[0].firstName, 
            UserRegistrationTestdata[0].lastName, 
            UserRegistrationTestdata[0].emailId,
            UserRegistrationTestdata[0].phoneNumber,
            UserRegistrationTestdata[0].states,
            UserRegistrationTestdata[0].userRoles,
            UserRegistrationTestdata[0].enterPassword,
            UserRegistrationTestdata[0].confirmPassword)
    });

    //This it block is excute for validate that first name field is mandatory

    it('Validate that first name field is mandatory', async () => {

        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[1].firstName, 
            UserRegistrationTestdata[1].lastName, 
            UserRegistrationTestdata[1].emailId,
            UserRegistrationTestdata[1].phoneNumber,
            UserRegistrationTestdata[1].states,
            UserRegistrationTestdata[1].userRoles,
            UserRegistrationTestdata[1].enterPassword,
            UserRegistrationTestdata[1].confirmPassword)

        await RegisterPage.firstNameIsRequied('First name is required')
    });

    //This it block is excute for validate that last name field is mandatory

    it('Validate that Last name field is mandatory', async () => {

        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[2].firstName, 
            UserRegistrationTestdata[2].lastName, 
            UserRegistrationTestdata[2].emailId,
            UserRegistrationTestdata[2].phoneNumber,
            UserRegistrationTestdata[2].states,
            UserRegistrationTestdata[2].userRoles,
            UserRegistrationTestdata[2].enterPassword,
            UserRegistrationTestdata[2].confirmPassword)

        await RegisterPage.lastNameIsRequied('Last name is required')
    });

    //This it block is excute for validate that email field is mandatory

    it('Validate that Email field is mandatory', async () => {

        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[3].firstName, 
            UserRegistrationTestdata[3].lastName, 
            UserRegistrationTestdata[3].emailId,
            UserRegistrationTestdata[3].phoneNumber,
            UserRegistrationTestdata[3].states,
            UserRegistrationTestdata[3].userRoles,
            UserRegistrationTestdata[3].enterPassword,
            UserRegistrationTestdata[3].confirmPassword)

        await RegisterPage.emailIsRequied('Email is required')
    });

    //This it block is excute for validate that phone number is mandatory

    it('Validate that phone number is mandatory', async () => {

        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[4].firstName, 
            UserRegistrationTestdata[4].lastName, 
            UserRegistrationTestdata[4].emailId,
            UserRegistrationTestdata[4].phoneNumber,
            UserRegistrationTestdata[4].states,
            UserRegistrationTestdata[4].userRoles,
            UserRegistrationTestdata[4].enterPassword,
            UserRegistrationTestdata[4].confirmPassword)

        await RegisterPage.phoneNumberIsRequied('Phone Number is required')
    });

    //This it block is excute for validate that enter password is mandatory

    it('Validate that enter password is mandatory', async () => {

        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[5].firstName, 
            UserRegistrationTestdata[5].lastName, 
            UserRegistrationTestdata[5].emailId,
            UserRegistrationTestdata[5].phoneNumber,
            UserRegistrationTestdata[5].states,
            UserRegistrationTestdata[5].userRoles,
            UserRegistrationTestdata[5].enterPassword,
            UserRegistrationTestdata[5].confirmPassword)

        await RegisterPage.enterPasswordIsRequied('Password is required')
    });

    //This it block is excute for validate that confirm password is mandatory

    it('Validate that confirm password is mandatory', async () => {

        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[6].firstName, 
            UserRegistrationTestdata[6].lastName, 
            UserRegistrationTestdata[6].emailId,
            UserRegistrationTestdata[6].phoneNumber,
            UserRegistrationTestdata[6].states,
            UserRegistrationTestdata[6].userRoles,
            UserRegistrationTestdata[6].enterPassword,
            UserRegistrationTestdata[6].confirmPassword)

        await RegisterPage.confirmPasswordIsRequied('Confirm Password is a required field')
    });

    //This it block is excute for validate that first name field is not accepting special character or number
    
    it('Validate that first name field is not accepting special character or number', async () => {

        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[7].firstName, 
            UserRegistrationTestdata[7].lastName, 
            UserRegistrationTestdata[7].emailId,
            UserRegistrationTestdata[7].phoneNumber,
            UserRegistrationTestdata[7].states,
            UserRegistrationTestdata[7].userRoles,
            UserRegistrationTestdata[7].enterPassword,
            UserRegistrationTestdata[7].confirmPassword)

        await RegisterPage.firstNameIsRequied('Only alphabets are allowed for this field')
    });

    //This it block is excute for validate that last name field is not accepting special character or number

    it('Validate that Last name field is not accepting special character or number', async () => {

        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[8].firstName, 
            UserRegistrationTestdata[8].lastName, 
            UserRegistrationTestdata[8].emailId,
            UserRegistrationTestdata[8].phoneNumber,
            UserRegistrationTestdata[8].states,
            UserRegistrationTestdata[8].userRoles,
            UserRegistrationTestdata[8].enterPassword,
            UserRegistrationTestdata[8].confirmPassword)

        await RegisterPage.lastNameIsRequied('Only alphabets are allowed for this field')
    });

    //This it block is excute for validate that email field is only accepting proper email format

    it('Validate that Email field is only accepting proper email format', async () => {

        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[9].firstName, 
            UserRegistrationTestdata[9].lastName, 
            UserRegistrationTestdata[9].emailId,
            UserRegistrationTestdata[9].phoneNumber,
            UserRegistrationTestdata[9].states,
            UserRegistrationTestdata[9].userRoles,
            UserRegistrationTestdata[9].enterPassword,
            UserRegistrationTestdata[9].confirmPassword)

        await RegisterPage.emailIsRequied('Email must be a valid email address')
    });

    //This it block is excute for validate that phone is only accepting 10 digit number

    it('Validate that phone number is only accepting 10 digit number', async () => {

        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[10].firstName, 
            UserRegistrationTestdata[10].lastName, 
            UserRegistrationTestdata[10].emailId,
            UserRegistrationTestdata[10].phoneNumber,
            UserRegistrationTestdata[10].states,
            UserRegistrationTestdata[10].userRoles,
            UserRegistrationTestdata[10].enterPassword,
            UserRegistrationTestdata[10].confirmPassword)

        await RegisterPage.phoneNumberIsRequied('Phone Number must be of 10 Digits')
    });
    
    /*
    //This it block is excute for validate that value in state/UT field is mandatory

    it.only('Validate that value in state/UT field is mandatory', async () => {

        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[11].firstName, 
            UserRegistrationTestdata[11].lastName, 
            UserRegistrationTestdata[11].emailId,
            UserRegistrationTestdata[11].phoneNumber,
            UserRegistrationTestdata[11].states,
            UserRegistrationTestdata[11].userRoles,
            UserRegistrationTestdata[11].enterPassword,
            UserRegistrationTestdata[11].confirmPassword)

        await RegisterPage.stateIsRequied('State is required')
    });

    /*
    //This it block is excute for validate that value in user role is mandatory

    it('Validate that value in user role is mandatory', async () => {

        await RegisterPage.checkHeading('Register to Track And Trace')
        await RegisterPage.register(
            UserRegistrationTestdata[12].firstName, 
            UserRegistrationTestdata[12].lastName, 
            UserRegistrationTestdata[12].emailId,
            UserRegistrationTestdata[12].phoneNumber,
            UserRegistrationTestdata[12].states,
            UserRegistrationTestdata[12].userRoles,
            UserRegistrationTestdata[12].enterPassword,
            UserRegistrationTestdata[12].confirmPassword)

        await RegisterPage.userRoleIsRequied('Role is required')
    });*/
});