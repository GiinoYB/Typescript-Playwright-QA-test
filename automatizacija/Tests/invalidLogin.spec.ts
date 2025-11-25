import { test } from "@playwright/test";
import { LoginPage }  from '../src/pages/LoginPage';

test('Login test - invalid credentials', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('locked_out_user', 'secret_sauce');
  await login.expectLoginError();
});