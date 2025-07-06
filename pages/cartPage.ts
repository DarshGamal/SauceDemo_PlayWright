import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly checkoutBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutBtn = page.locator("//*[@id='checkout']");
    }
    async clickOnCheckoutBtn() {
        await this.checkoutBtn.click();
    }
}