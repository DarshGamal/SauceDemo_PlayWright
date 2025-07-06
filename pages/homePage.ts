import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator("//*[@id='add-to-cart-sauce-labs-backpack']");
        this.cartIcon = page.locator("//a[@class='shopping_cart_link']");
    }

    async AssertOnURLHomePage() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }
    async AddItemToCart() {
        await this.addToCartButton.click();
    }
    async clickOnCartIcon() {
        await this.cartIcon.click();
    }

}