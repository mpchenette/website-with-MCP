const { test, expect } = require('@playwright/test');

test('Home page loads and red dot navigates to Assist', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Adjust port if needed
  await expect(page).toHaveTitle(/Sienna|Product Detail Page/);
  await page.click('.ellipse');
  await expect(page).toHaveURL(/assist\.html/);
  await expect(page.locator('.title')).toHaveText('Assist Page');
});