const{test,expect}=require('@playwright/test')
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'

test.describe('HomePageTest',()=>{
let home;
let login;
 test.beforeEach(async ({page})=>{
    home=new HomePage(page)
    login=new LoginPage(page)
    await login.GoToLoginPage()
    await login.openLoginModal()
    await login.Login('Rincy','test@123')
 })

test.skip('Title & URL Verification',async({page})=>{
   
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');
})


 test.skip('Display product count and product names',async({page}) => {
    await home.addToCart("Nexus 6")
  })

  test.only('Verify logout link and welcome username visibility',async({page})=>{
    
    await page.waitForTimeout(3000);
    await expect(home.LogoutLink).toBeVisible();
    await expect(home.NameOfUser).toBeVisible()
    await expect(home.NameOfUser).toContainText('Welcome Rincy')
    await home.BrandLogoVisibility()
})
test('Verify BrandLogo Visibility',async({page})=>{

  await expect(home.BrandLogo).toBeVisible()
})


})