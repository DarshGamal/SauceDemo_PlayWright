import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.locator("//input[@type='submit']");
    }

    async openBrowser() {
        await this.page.goto("https://www.saucedemo.com/");
    }
    async enterLoginData(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}