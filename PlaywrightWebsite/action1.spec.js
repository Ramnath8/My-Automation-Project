const { test} = require('@playwright/test');
const {Action1} = require('./subaction.spec.js'); //impoprting function Action1
const {validatingItems} = require('./valiadting listItems.spec.js');
test('Verify Header Text', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  //calling imported function
  await Action1(page);
  await validatingItems(page);
});

