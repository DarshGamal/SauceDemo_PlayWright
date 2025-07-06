import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { ConfirmationPage } from '../pages/confirmationPage';
let loginPage: LoginPage, checkoutPage: CheckoutPage, homePage: HomePage, cartPage: CartPage,confirmationPage:ConfirmationPage;
test('valid login', async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    confirmationPage=new ConfirmationPage(page);
    await loginPage.openBrowser();
    await loginPage.enterLoginData('standard_user', 'secret_sauce');
    await homePage.AssertOnURLHomePage();
    await homePage.AddItemToCart();
    await homePage.clickOnCartIcon();
    await cartPage.clickOnCheckoutBtn();
    checkoutPage.fillInfoData('mostafa', 'gamal', '1234');
    checkoutPage.clickOnContinueButton();
    confirmationPage.clickOnFinishButton();
    //confirmationPage.assertONConfirmedMessage();
});










