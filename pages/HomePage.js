exports.HomePage=class HomePage{

    constructor(page)
    {
        this.page=page;
         // Product section
        this.ProductsList='#tbodyid h4 a';
        this.CartBtn=page.locator("//a[normalize-space()='Add to cart']");

        // Header elements
        this.CartMenu="#cartur";
        this.products=page.locator('#tbodyid .card-title a');
        this.LogoutLink=page.locator('#logout2');
        this.NameOfUser=page.locator('#nameofuser');
        this.BrandLogo=page.locator('//*[@id="nava"]');
        
    }


        
       async addToCart(productName) 
       { 
        const count = await this.products.count(); 
        console.log('number of products:', count);

         for (let i = 0; i < count; i++) 
            { 
                const name = await this.products.nth(i).textContent(); 
                if (name.includes(productName)) 
                    { 
                    await this.products.nth(i).click(); 
                    break; 
                } }
                 this.page.once('dialog', async dialog => { 
                    await expect(dialog.message()).toContain('Product added')
                    await dialog.accept(); 
                }); 
                await this.CartBtn.click();
            }

}
