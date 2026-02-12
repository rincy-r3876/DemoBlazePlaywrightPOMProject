exports.ProductPage=class ProductsPage{

    constructor(page)
    {
        this.page=page;
        this.products='#tbodyid .card'; //each product card
        this.productNames='#tbodyid .card-title';
        this.productPrices='#tbodyid .card h5';
        this.productImage='#tbodyid img';
    }

async goto()
 {
     await this.page.goto('https://www.demoblaze.com/index.html');
 }

 async getProductCount() 
 { 
    return await this.products.count(); 

 }

 async validateProducts()
 { 
    const count = await this.getProductCount(); 
    console.log('Product count:', count); 
    if (count === 0) { throw new Error('No products found!');

     }
     for (let i = 0; i < count; i++) 
        { 
            const name = await this.productNames.nth(i).textContent(); 
            const price = await this.productPrices.nth(i).textContent(); 
            const imageVisible = await this.productImages.nth(i).isVisible();
             console.log(`Product ${i + 1}: ${name} - ${price}`);
              if (!name || !price || !imageVisible) 
                { throw new Error(`Product ${i + 1} is missing details`);
             } } }

}