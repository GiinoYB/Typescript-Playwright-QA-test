import { test } from "@playwright/test";
import { LoginPage }  from '../src/pages/LoginPage';

test('Login test - valid standard user', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await login.expectSuccessfulLogin();
});

