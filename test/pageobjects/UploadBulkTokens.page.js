const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class UploadBulkTokensPage{

    //Web Locators

    get heading(){
        return $("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0'] div h3") //css for heading the uploadBulkData page
    }

    /*
    This method is to validate the heading of upload bulk tokens page

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){
        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of upload bulk tokens page

        report.addStep("Validate the heading of the upload bulk tokens page",await browser.takeScreenshot(),"passed")
    }
}
module.exports = new UploadBulkTokensPage(); //This is for exporting the instance of UploadBulkTokensPage class