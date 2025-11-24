import { test } from '@playwright/test';
import { GooglePage } from '../src/pages/GooglePage';

test('Google search + go to Yettel login', async ({ page }) => {
  const google = new GooglePage(page);

  // 1. Otvori Google
  await google.goto();

  // 2. Pretrazi nešto (opciono)
  await google.search('Playwright automation');
  await google.expectResults();

  // 3. Idi na Yettel login sajt
  await page.goto('https://online.yettelbank.rs/login');

  // 4. Provera URL-a
  await page.waitForURL('https://online.yettelbank.rs/login', { timeout: 5000 });
});
