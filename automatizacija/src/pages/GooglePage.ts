import { Page, expect } from '@playwright/test';

export class GooglePage {
  readonly page: Page;
  readonly searchBox = 'textarea[name="q"]';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.google.com/');
  }

  async search(keyword: string) {
    await this.page.fill(this.searchBox, keyword);
    await this.page.keyboard.press('Enter');
  }

  async expectResults() {
    await expect(this.page.locator('#search')).toBeVisible();
  }
}
