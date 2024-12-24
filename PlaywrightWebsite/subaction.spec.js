const {test, expect} = require('@playwright/test');
async function Action1(page) {
    const headerLocator = page.getByRole('heading', { name: 'Playwright enables reliable end-to-end testing for modern web apps.' });
  
    // Assert that the header text matches
    await expect(headerLocator).toHaveText('Playwright enables reliable end-to-end testing for modern web apps.');
    const getstarted = page.getByRole('link', {name:'get started'});
    await getstarted.click();
    const installation = page.getByRole('heading', {name:'Installation'});
    const PWLogo = page.getByRole('img', {name: 'playwright logo'});
    const gitnub = page.getByRole('link', {name:'Github repository'});
    const server = page.getByRole('link', {name: 'discord server'});
    await expect(installation).toBeVisible();
    await expect(PWLogo).toBeVisible();
    await expect(gitnub).toBeVisible();
    await expect(server).toBeVisible();
        
};

module.exports = {Action1};