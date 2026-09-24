const { test, expect } = require('@playwright/test');

test('Get specific value from table', async ({ page }) => {

    console.log('\n1 - Test started');

    await page.goto('https://demoqa.com/webtables');

    console.log('\n2 - Page loaded');

    const row = page.getByRole('row').filter({ hasText: 'Cierra' });

    console.log('\n3 - Row found');

    const name = row.getByRole('cell').nth(1);
    const salary = row.getByRole('cell').nth(4);

    console.log('\n4 - Locators created');

    //console.log('This is the cell Name:', await name.innerText());
    const Name = await name.innerText();
    console.log('\n5 - Assert the Name is correct');
    expect(Name).toContain('Vega');
    console.log('This is the cell Name [1]', Name)
    
    console.log('\n6 - Assert the Salary is correct');
    const Salary = await salary.innerText();
    console.log('This is cell Salary [4]', Salary)
    expect(Salary).toContain('10000');

    //console.log('This is the Salary Amount:', await salary.innerText());

    await expect(salary).toHaveText('10000');

    console.log('\n7 - Test passed');

});