//Testing page https://the-internet.herokuapp.com/


const { test, expect } = require('@playwright/test');

test('Handle the Alret successfuly', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

   // Click the "Click for JS Alert" button 
   await page.getByRole('button', { name: 'Click for JS Alert' }).click(); 
   
   // Verify the result text 
   await expect(page.locator('#result')) .toHaveText('You successfully clicked an alert');

});

test('Handle the Alert successfully', async ({ page }) => { 
await page.goto('https://the-internet.herokuapp.com/javascript_alerts'); 

// Handle the JavaScript alert 
page.on('dialog', async dialog => { 
console.log('The type of Alert message:', dialog.message()); 
await dialog.accept(); }); 

// Click the "Click for JS Alert" button 
await page.getByRole('button', { name: 'Click for JS Alert' }).click(); 

// Verify the result text 
await expect(page.locator('#result')) .toHaveText('You successfully clicked an alert'); 

});