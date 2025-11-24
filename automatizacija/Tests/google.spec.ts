import { test } from '@playwright/test';
import { GooglePage } from '../src/pages/GooglePage';

test('Google search test (POM)', async ({ page }) => {
  const google = new GooglePage(page);

  await google.goto();
  await google.search('Playwright automation');
  await google.expectResults();
});
