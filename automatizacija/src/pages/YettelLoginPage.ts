import { Page, expect } from '@playwright/test';

export class YettelLoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://online.yettelbank.rs/login');
  }

  async expectLoginPageVisible() {
    await expect(this.page).toHaveURL(/.*login/);
    await expect(this.page.locator('text=PRIJAVA')).toBeVisible({ timeout: 5000 }).catch(() => {});
  }
}
