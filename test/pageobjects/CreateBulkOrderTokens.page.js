const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class CreateBulkOrderTokensPage{

    //Web Locators

    get heading(){
        return $("div>h4") //css for heading the publishBulkArt page
    }

    get bulkTokenNumberTextbox(){
        return $('input[name="totalTokens"]') //css for bulk token number textbox
    }

    get resetButton(){
        return $('span:nth-child(1)>label') //css for reset button
    }

    get submitButton(){
        return $('span:nth-child(2)>label') //css for submit button
    }

    /*
    This method is to validate the heading of the create bulk order tokens page

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of the cretae bulk order tokens page

        report.addStep("Validate the heading of the create bulk order tokens page",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is to click on the bulk token number box and enter the numbers of token which are required
    */
    async BulkTokenNumber(){

        await this.bulkTokenNumberTextbox.click() //Clicking on the bulk token number box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the bulk token number box",await browser.takeScreenshot(),"passed")

        await this.bulkTokenNumberTextbox.setValue('1') //Enter the number of token

        await browser.pause(2000) //Pause browser

        report.addStep("Enter the number of token",await browser.takeScreenshot(),"passed") 
    } 

    /*
    This method is for click the Reset button
    */
    async ResetButton(){

        await this.resetButton.click() //Clicking on the reset button

        report.addStep("Click on the reset button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for click the submit button
    */
    async SubmitButton(){

        await this.submitButton.click() //Clicking on the submit button

        report.addStep("Click on the submit button",await browser.takeScreenshot(),"passed")
    }
}
module.exports = new CreateBulkOrderTokensPage(); //This is for exporting the instance of CreateBulkOrderTokensPage class