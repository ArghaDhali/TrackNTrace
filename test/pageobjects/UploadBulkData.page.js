const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class UploadBulkDataPage{

    //Web Locators

    get heading(){
        return $("div[class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12 css-15j76c0'] div h3") //css for heading the uploadBulkData page
    }

    /*
    This method is to validate the heading of upload bulk data page

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of upload bulk data page

        report.addStep("Validate the heading of the upload bulk data page",await browser.takeScreenshot(),"passed")
    }
}
module.exports = new UploadBulkDataPage(); //This is for exporting the instance of UploadBulkDataPage class