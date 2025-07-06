import { expect, type Locator, type Page } from '@playwright/test';

export class ConfirmationPage {
    readonly page: Page;
    readonly confirmedMSG: Locator;
    readonly finishBtn: Locator;
    constructor(page: Page) {
        this.page = page;
        this.finishBtn = page.getByRole('button', { name: 'Finish' });
        this.confirmedMSG = page.locator("//*[@id='checkout_complete_container']/h2");
    }
    async clickOnFinishButton() {
        await this.finishBtn.click();
    }
    async assertONConfirmedMessage() {
        await expect.soft(this.confirmedMSG).toBeVisible();
    }
}