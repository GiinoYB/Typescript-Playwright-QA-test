import { test } from "@playwright/test";
import { LoginPage }  from '../src/pages/loginPage';

test('Login test - invalid credentials', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('wrong_user', 'wrong_password');
  await login.expectLoginError();
});