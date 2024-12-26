const {test,expect} = require('@playwright/test');

test.describe('Login to Testpage', () => {
    test('Successfull login', async({page})=>{
        const Username = 'practice';
        const Password = 'SuperSecretPassword!';
        await page.goto('https://practice.expandtesting.com/login');
        await page.getByRole('textbox', {name: 'Username'}).fill(Username);
        await page.getByRole('textbox', {name: 'Password'}).fill(Password);
        await page.getByRole('button', {name: 'Login'}).click();
        // await page.getByRole('heading', {name: 'Secure Area page for Automation Testing Practice'}).toBeVisible();
        await page.getByRole('link', {name: 'Logout',}).click();
        // await page.getByRole('button', {name: 'close',}).toBeVisible();
        // await page.getByRole('button', {name: 'close',}).click();
    });
    test('Failed Login', async({page}) => {
        const Username = 'practice';
        const Password = 'Super';
        await page.goto('https://practice.expandtesting.com/login');
        await page.getByRole('textbox', {name: 'Username'}).fill(Username);
        await page.getByRole('textbox', {name: 'Password'}).fill(Password);
        await page.getByRole('button', {name: 'Login'}).click();
        // await page.getByRole('button', {name:'close'}).toBeVisible();
        await page.getByRole('button', {name:'close'}).click();
    })

});
