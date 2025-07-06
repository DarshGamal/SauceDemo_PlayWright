import { expect, type Locator, type Page } from '@playwright/test';

export class CheckoutPage{
    readonly page:Page;
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly code:Locator;
    readonly continueBtn:Locator;
    constructor(page:Page){
        this.page=page;
        this.firstName=page.getByPlaceholder('First Name');
        this.lastName=page.getByPlaceholder('Last Name');
        this.code=page.getByPlaceholder('Zip/Postal Code');
        this.continueBtn=page.locator("//*[@id='continue']");
    }

    async fillInfoData(firstName:string,lastName:string,code:string){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.code.fill(code);
    }
    async clickOnContinueButton(){
        await this.continueBtn.click();
    }
}