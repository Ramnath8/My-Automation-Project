import {test,expect} from '@playwright/test';
test.beforeEach( async({page}) => {
    try {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'load' });
    } catch (error) {
        console.error('Error navigating:', error);
    }
});

test.describe('Testing Login Page', () =>{
    // test('Successfull login', async({page}) =>{
    //     let username: string = 'Admin';
    //     let passoword: string = 'admin123';
    //     //creating Elements 
    //     const HRMLogin = page.getByRole('img', {name:'company-branding'});
    //     const Login_header = page.getByRole('heading', {name:'Login'});
    //     const HRM_input = page.getByPlaceholder('Username');
    //     const HRM_Password = page.getByPlaceholder('Password');
    //     const HRM_LoginButton = page.getByRole('button', {name:'Login'});
    //     const HRM_forgotPassword = page.getByText('Forgot your Password?');
    //     const HRM_logo = page.getByAltText('orangehrm-logo').first();
    //     const HRM_Dashboard = page.getByRole('heading',{name:'Dashboard'});
    //     // Idetifying Created Elements
    //     await expect(HRMLogin).toBeVisible();
    //     await expect(Login_header).toHaveText('Login');
    //     await HRM_input.fill(username);
    //     await HRM_Password.fill(passoword);
    //     await expect(HRM_LoginButton).toBeEnabled();
    //     await expect(HRM_forgotPassword).toBeVisible();
    //     await expect(HRM_logo).toBeHidden();
    //     await HRM_LoginButton.click();
    //     let URL = page.url();
    //     console.log(URL);
    //     await expect(HRM_Dashboard).toHaveRole('heading');
    // });
    //Negative Testcase....
    Login();
    test('Login Failed', async({page}) =>{
        let username: string = 'Admin';
        let passoword: string = 'admin12';
        //creating Elements 
        const HRMLogin = page.getByRole('img', {name:'company-branding'});
        const Login_header = page.getByRole('heading', {name:'Login'});
        const HRM_input = page.getByPlaceholder('Username');
        const HRM_Password = page.getByPlaceholder('Password');
        const HRM_LoginButton = page.getByRole('button', {name:'Login'});
        const HRM_forgotPassword = page.getByText('Forgot your Password?');
        const HRM_logo = page.getByAltText('orangehrm-logo').first();
        const Alert_message = page.getByRole('alert');
        // Idetifying Created Elements
        await expect(HRMLogin).toBeVisible();
        await expect(Login_header).toHaveText('Login');
        await HRM_input.fill(username);
        await HRM_Password.fill(passoword);
        await expect(HRM_LoginButton).toBeEnabled();
        await expect(HRM_forgotPassword).toBeVisible();
        // await expect(HRM_logo).toBeVisible();
        // if (HRM_logo) {
        //     await expect(HRM_logo).toBeVisible(); 
        // }
        await HRM_LoginButton.click();
        await expect(Alert_message).toBeVisible();
    });
    
});

test.describe('Validating HRM_Dashboard page', () =>{
    test('Validating Side ribbon', async (page) => {
        Login();
        
    })
})





function Login() {
    test('Successfull login', async({page}) =>{
        let username: string = 'Admin';
        let passoword: string = 'admin123';
        //creating Elements 
        const HRMLogin = page.getByRole('img', {name:'company-branding'});
        const Login_header = page.getByRole('heading', {name:'Login'});
        const HRM_input = page.getByPlaceholder('Username');
        const HRM_Password = page.getByPlaceholder('Password');
        const HRM_LoginButton = page.getByRole('button', {name:'Login'});
        const HRM_forgotPassword = page.getByText('Forgot your Password?');
        const HRM_logo = page.getByAltText('orangehrm-logo').first();
        const HRM_Dashboard = page.getByRole('heading',{name:'Dashboard'});
        // Idetifying Created Elements
        await expect(HRMLogin).toBeVisible();
        await expect(Login_header).toHaveText('Login');
        await HRM_input.fill(username);
        await HRM_Password.fill(passoword);
        await expect(HRM_LoginButton).toBeEnabled();
        await expect(HRM_forgotPassword).toBeVisible();
        await expect(HRM_logo).toBeHidden();
        await HRM_LoginButton.click();
        let URL = page.url();
        console.log(URL);
        await expect(HRM_Dashboard).toHaveRole('heading');
    });
    
}

