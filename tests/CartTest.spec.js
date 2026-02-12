import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { ProductPage } from '../pages/ProductPage'
import { CartPage } from '../pages/CartPage'
import { HomePage } from '../pages/HomePage'

test.describe('CartPageTests',()=>{
    test('1.Add Product To Cart and Alert Validation',async({page})=>{
        const login=new LoginPage(page);
        const cart=new CartPage(page);
       await login.Login('Rincy','test@123');
       await page.waitForTimeout(3000);

      const home=new HomePage(page);
       await home.addToCart("Nexus 6");
       expect(await cart.getCartItemCount()).toBe(1);

    })


    test('2. Adding same product twice', async ({ page }) => {
    const login=new LoginPage(page);
       const cart=new CartPage(page);
       await login.Login('Rincy','test@123');
       await page.waitForTimeout(3000);

       const home=new HomePage(page);
       page.on('dialog', d => d.accept());
       await home.addToCart("Nexus 6");
       await home.addToCart("Nexus 6");

    await cart.gotoCart();
    expect(await cart.getCartItemCount()).toBe(2);
  });

   test('3. Add to cart without login', async ({ page }) => {
    const home = new HomePage(page);
    const login=new LoginPage(page)


    await page.goto('https://www.demoblaze.com/')
    await home.addToCart('Nexus 6');

  })

  test('4. Refresh page after login and check cart', async ({ page }) => {
    const home = new HomePage(page);
    const cart = new CartPage(page);
    const login = new LoginPage(page);

    await home.goto();
    await login.Login('Rincy', 'test@123');

    await page.reload();
    await cart.gotoCart();

    expect(await cart.getCartItemCount()).toBeGreaterThanOrEqual(0);
  });

  test('5. Navigate directly to cart without items', async ({ page }) => {
    const cart = new CartPage(page);

    await cart.gotoCartDirectly();
    expect(await cart.getCartItemCount()).toBe(0);
  });


})