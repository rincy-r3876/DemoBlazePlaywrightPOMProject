import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test.describe('login Feature',()=>{
 let login;
test.beforeEach(async ({page})=>
{    
    login=new LoginPage(page)
    await login.GoToLoginPage();
    await login.openLoginModal();
})

test.only('Successful Login',async({page})=>
{

      await login.Login('Rincy','test@123')
      await page.waitForTimeout(3000)
})

test.skip('Unsuccessful Login using Invalid Credentials',async({page})=>
{

    page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('User does not exist.');
    await dialog.accept();
  })
      await login.Login('Rincyyy','test@123333');
})

test.skip('UnSuccessful Login using empty credentials',async({page})=>{

await page.waitForTimeout(3000);

page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('Please fill out Username and Password.');
    await dialog.accept();
  });
  await login.Login('','');
  await expect(login.LoginLink).toBeVisible();
  //await expect(loginPage.getLogoutLink()).toBeHidden();
})

test('Checking the input boxes are visible and editable',async({page})=>{

// await expect(login.getUsernameInput()).toBeVisible();
await expect(login.UsernameField).toBeEditable();
await expect(login.PasswordField).toBeEditable();
await expect(login.LoginLink).toBeVisible();
await page.waitForTimeout(3000)


})
})