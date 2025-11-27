import { test } from "@playwright/test";
import { LoginPage }  from '../src/pages/LoginPage';
import { InventoryPage }  from '../src/pages/InventoryPage';

test('Add to cart after login', async ({ page }) => {

//Login page
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.expectSuccessfulLogin();

//Inventory page
  const inventory = new InventoryPage (page);

//Add item to cart
  await inventory.addToCart();
  
//Check cart
  await inventory.expectItemInCart();

});
