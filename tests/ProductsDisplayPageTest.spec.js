import{test,expect}from '@playwright/test'
import { ProductsPage } from '../pages/ProductsDisplayPage'

test.describe('ProductPageTest', () => 
    {
         let productPage; 
         test.beforeEach(async ({ page }) => 
            { 
                ProductsPage = new ProductsPage(page); 
                await ProductsPage.goto(); 
            }); 
            
    test('Display product count and product details', async ({ page }) => 
        { 
            const count = await ProductsPage.getProductCount(); 
            expect(count).toBeGreaterThan(0); // product count > 0 
            await ProductsPage.validateProducts(); // check name, price, image
             }); 
             })  
        