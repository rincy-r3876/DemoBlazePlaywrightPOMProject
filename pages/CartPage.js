exports.CartPage=
class CartPage{
    constructor(page)
    {
        this.page=page;
        this.cartMenu=page.locator("//a[normalize-space()='Cart']");
        this.cartRow=page.locator('#tbodyid tr');
    }

    async gotoCart()
    {
 await this.page.goto('https://www.demoblaze.com/index.html');
 await this.page.click(this.cartMenu);
    }

    async gotoCartDirectly()
    {
        await this.page.goto('https://www.demoblaze.com/cart.html')
    }

    async getCartItemCount()
    {
      return await this.cartRow.count();
    }


}