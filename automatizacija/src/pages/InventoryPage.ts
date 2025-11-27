import { Page, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly addToCartButton = '#add-to-cart-sauce-labs-fleece-jacket';
  readonly shoppingCart = '.shopping_cart_badge';
    
    constructor(page: Page) {
    this.page = page;
  }

    async addToCart () {
        await this.page.click(this.addToCartButton);

    }

    async expectItemInCart () {
        const badge = this.page.locator(this.shoppingCart);
        await this.page.waitForSelector(this.shoppingCart);
        await expect(badge).toBeVisible();
        await expect(badge).toHaveText("1");

 }}