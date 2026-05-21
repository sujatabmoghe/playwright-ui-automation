import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { expect } from '@playwright/test';
import LoginData from '../../test-data/LoginData.json';


test('Successful Login', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    //await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.login(LoginData['valid_user'].username, LoginData['valid_user'].password);
    //await loginPage.verifyLoginSuccess();
     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
});

test('Unsuccessful Login', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    //await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.login(LoginData['invalid_user'].username, LoginData['invalid_user'].password);
    //await loginPage.verifyLoginSuccess();
     await expect(loginPage.errorMessage).toBeVisible();
    
});
