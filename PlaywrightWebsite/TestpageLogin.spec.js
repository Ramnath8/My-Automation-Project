const {test,expect} = require('@playwright/test');

test.describe('Login to Testpage', () => {
    test('Successfull login', async({page})=>{
        const Username = 'practice';
        const Password = 'SuperSecretPassword!';
        await page.goto('https://practice.expandtesting.com/login');
        await page.getByRole('textbox', {name: 'Username'}).fill(Username);
        await page.getByRole('textbox', {name: 'Password'}).fill(Password);
        await page.getByRole('button', {name: 'Login'}).click();
    });
    test('Failed Login', async({page}) => {
        const Username = 'practice';
        const Password = 'Super';
        await page.goto('https://practice.expandtesting.com/login');
        await page.getByRole('textbox', {name: 'Username'}).fill(Username);
        await page.getByRole('textbox', {name: 'Password'}).fill(Password);
        await page.getByRole('button', {name: 'Login'}).click();
        await expect(page.getByRole('alert')).toHaveText('Your username is invalid!');
    })

});
