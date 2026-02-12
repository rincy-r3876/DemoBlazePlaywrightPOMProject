import {test,expect} from '@playwright/test'
import { ProductPage } from '../pages/ProductPage'

test.describe('SingleProductPageTest', () => {
  let prdctPage;

  test.beforeEach(async ({ page }) => {
    prdctPage = new ProductPage(page);
    await prdctPage.goto(1); // Samsung Galaxy S6
  });

  test('Verify product details are visible', async () => {
    const details = await prdctPage.getProductDetails();
    expect(details.name).toContain('Samsung');
    expect(details.price).toContain('$');
    expect(details.description).not.toBe('');
    expect(details.imageVisible).toBeTruthy();
  });

  test('Add product to cart', async () => {
    await prdctPage.addToCart();
    // optionally assert cart page or dialog accepted
  });
});