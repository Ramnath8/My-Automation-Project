const {test, expect} = require('@playwright/test');
test('FirstAutomationTest', async({page}) =>{
    await page.goto("https://google.com/");
    var google = page.getByAltText('Google');
    await expect(google).toBeVisible();
    var InputEvent = page.getByRole("combobox");
    await InputEvent.fill('playwright');
    await page.keyboard.press('Enter');
})