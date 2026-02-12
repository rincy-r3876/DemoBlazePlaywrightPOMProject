exports.ProductPage=class ProductPage{

    constructor(page)
    {
        this.page=page;
        
        this.productName=page.locator('#tbodyid h2');
        this.productPrice=page.locator('#tbodyid h3');
        this.productDescription=page.locator('#tbodyid .description');
        this.productImage=page.locator('#imgp img');
        this.cartbtn=page.locator('[onclick="addToCart(1)"]'); // //*[text()='Add to cart']
    }

    async goto(productId = 1) 
    { 
        await this.page.goto(`https://www.demoblaze.com/prod.html?idp_=${productId}`); 
    }
    
    async getProductDetails()
     { 
        return { 
            name: await this.productName.textContent(), 
            price: await this.productPrice.textContent(),
             description: await this.productDescription.textContent(),
              imageVisible: await this.productImage.isVisible(), 
            }
        }
    async addToCart()
     { 
        this.page.once('dialog', async dialog => 
            { await dialog.accept(); 

            })
             await this.cartbtn.click()
            } }
