const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class OrderTokenTablesPage{

    //Web Locators

    get heading(){
        return $('li>a[aria-current="page"]') //css for headinin the tokens page
    }

    /*
    This method is to validate the heading of the order tokens tables page

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of the order tokens tables page
        
        report.addStep("Validate the heading of the order tokens tables page",await browser.takeScreenshot(),"passed")
    }
}
module.exports = new OrderTokenTablesPage(); //This is for exporting the instance of OrderTokenTablesPage class