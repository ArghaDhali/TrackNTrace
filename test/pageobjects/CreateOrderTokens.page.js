const report = require('@wdio/allure-reporter') //This is for importing the instance of Allure Reports

//sub page containing specific selectors and methods for a specific page

class CreateOrderTokensPage{

    //Web Locators

    get heading(){
        return $('a[href="/publishArt"]') //css for heading the create order tokens page
    }

    get createOrderTokensButton(){
        return $('a[href="/publishArt"]') //css for create order tokens button
    }

    get categoryDropdown(){
        return $('div[class="form-group"]>select[name="category"]') //css for category dropdown box
    }

    /*
    This method is to validate the heading of the create order tokens page

    @param ValidationMessage - message which needs to be validated should be passed
    */
    async checkHeading(validationMessage){

        await expect(this.heading).toHaveTextContaining(validationMessage) //validating the validation message for check the heading of the create order tokens page

        report.addStep("Validate the heading of the create order tokens page",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the create order tokens button
    */
    async CreateOrderTokens(){

        await this.createOrderTokensButton.click() //Clicking on the create order tokens button

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the create order tokens button",await browser.takeScreenshot(),"passed")
    }

    /*
    This method is for clicking on the category dropdown box
    */
    async Category(){

        await this.categoryDropdown.click() //Clicking on the category dropdown box

        await browser.pause(2000) //Pause browser

        report.addStep("Click on the category dropdown box",await browser.takeScreenshot(),"passed")
    }
}
module.exports = new CreateOrderTokensPage(); //This is for exporting the instance of CreateOrderTokensPage class