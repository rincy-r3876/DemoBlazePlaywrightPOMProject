
exports.LoginPage=
class LoginPage{

    constructor(page)
    {
        this.page=page;
        // Locators
        this.LoginLink='#login2';
        this.UsernameField='#loginusername'
        this.PasswordField='#loginpassword'
        this.LoginBtn="button[onclick='logIn()']";
    }

    async GoToLoginPage()
    {
        await this.page.goto("https://www.demoblaze.com/index.html")
    }

    async openLoginModal() 
    {
         await this.page.click(this.LoginLink);
    }

    async Login(username,password)
    {
      await this.page.locator(this.UsernameField).fill(username);
      await this.page.locator(this.PasswordField).fill(password);
      await this.page.locator(this.LoginBtn).click();
    }
}