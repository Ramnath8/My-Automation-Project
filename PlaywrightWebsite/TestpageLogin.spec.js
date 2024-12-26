const {test,expect} = require('@playwright/test');

test.beforeEach(async({page}) => {
    await page.goto('https://practice.expandtesting.com/login');
    
});

test.describe('Login to Testpage', () => {
    test('Successfull login', async({page})=>{
        const Username = 'practice';
        const Password = 'SuperSecretPassword!';
        // await page.goto('https://practice.expandtesting.com/login');
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
        // await page.goto('https://practice.expandtesting.com/login');
        await page.getByRole('textbox', {name: 'Username'}).fill(Username);
        await page.getByRole('textbox', {name: 'Password'}).fill(Password);
        await page.getByRole('button', {name: 'Login'}).click();
        // await page.getByRole('button', {name:'close'}).toBeVisible();
        await page.getByRole('button', {name:'close'}).click();
    });
    test ('Registration page', async({page}) => {
        const Username = 'username';
        const Password = 'Passwordready';
        const link = await page.getByRole('link', {name: 'here'});
        await link.click();
        const heading = await page.getByRole('heading', {name: 'Test Register page for Automation Testing Practice'});
        const username = await page.getByRole('textbox', {name: 'Username'});
        const` password = await page.getByRole('textbox', {name: 'Password'});
        const` password = await page.getByRole('textbox', {name: 'Confirm Password'});
        const` button = await page.getByRole('button', {name: 'Register'});
        await username.fill(Username);
        await password.fill(Password);
        await confirm_password.fill(Password);
        await button.click();
    })

});
