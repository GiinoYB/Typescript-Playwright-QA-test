import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameField = '#user-name';
  readonly passwordField = '#password';
  readonly loginButton = '#login-button';
  readonly errorMessage = '.error-message-container';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }


  async expectLoginError() {
    const error = this.page.locator('.error-message-container');
    
    await expect(error).toBeVisible({ timeout: 5000 });
    await expect(error).toContainText('Sorry, this user has been locked out.');
}}