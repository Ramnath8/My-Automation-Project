const {test, expect} = require('@playwright/test');
test.beforeEach( async ({page}) =>{
    await  page.goto('https://practicetestautomation.com/practice-test-login/');

})

test.describe('Automating test application', () =>{
    test('Successfull login', async({page})=>{
        const Username = 'student';
        const Password = 'Password123';
        const Test_login = page.getByRole('heading', {name:'Test login'});
        const Username_input = page.getByRole('textbox', {name:'Username'});
        const Password_input = page.getByRole('textbox',{name:'password'});
        const Submit = page.getByRole('button', {name:'Submit'});
        const Succesfull_header = page.getByRole('heading', {name:'Logged In Successfully'});
        const logout = page.getByRole('link', {name:'Log out'});

        //login into the page 
        await expect(Test_login).toBeVisible();
        await Username_input.fill(Username);
        await Password_input.fill(Password);
        await Submit.click();
        const current_url = page.url();
        console.log(current_url);
        expect(current_url).toBe('https://practicetestautomation.com/logged-in-successfully/');
        await expect(Succesfull_header).toBeVisible();
        await logout.click();


    });
    //Negative Testcase 1
    test('Providing wrong Username', async({page}) =>{
        const username1 = 'stud';
        const password2 = 'Password123';
        const Test_login = page.getByRole('heading', {name:'Test login'});
        const Username_input = page.getByLabel('Username');
        const Password_input = page.getByLabel('Password');
        const Submit = page.getByRole('button', {name:'Submit'});
        const errormsg = page.locator('#error');
        await expect(Test_login).toBeVisible();
        await Username_input.fill(username1);
        await Password_input.fill(password2);
        await Submit.click();
        await expect(errormsg).toBeVisible();
        await expect(errormsg).toHaveText('Your username is invalid!');
    });

    //negative Testcase 2

    test('Providing wrong Password', async({page}) =>{
        const username1 = 'student';
        const password2 = 'Password1';
        const Test_login = page.getByRole('heading', {name:'Test login'});
        const Username_input = page.getByLabel('Username');
        const Password_input = page.getByLabel('Password');
        const Submit = page.getByRole('button', {name:'Submit'});
        const errormsg = page.locator('#error');
        await expect(Test_login).toBeVisible();
        await Username_input.fill(username1);
        await Password_input.fill(password2);
        await Submit.click();
        await expect(errormsg).toBeVisible();
        await expect(errormsg).toHaveText('Your password is invalid!');
    });
})