const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class CreateBulkTokensPage{

    //Web Locators

    get heading(){
        return $("div>h4") //css for heading the publishBulkArt page
    }

    /*
    This method is to validate the heading of the create bulk tokens page

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of the cretae bulk tokens page

        report.addStep("Validate the heading of the create bulk tokens page",await browser.takeScreenshot(),"passed")
    }
}
module.exports = new CreateBulkTokensPage(); //This is for exporting the instance of CreateBulkTokensPage class