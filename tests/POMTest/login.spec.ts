import test, { expect } from "@playwright/test";
import { LoginPage } from "../../pages/HomePage/LoginPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { CredtCardAppPage } from "../../pages/CreditCard/CredtCardAppPage";
import { TrackingApplicationStatus } from "../../pages/TrackingPage/TrackApplicationStatus";
import { DebitCardAppPage } from "../../pages/DebitCard/DebitCardAppPage";
import { CommonPlaywrightLib } from "../../Utils/CommonPlaywrightLib";
import dotenv from 'dotenv'


dotenv.config({path:'Urls/.env.sit'})

test("login to online banking",async({page})=>
{

  const loginPage=new LoginPage(page);
   await page.goto(process.env.siturl as string)

   
   const homePage1=new HomePage(page); 

   try{
 await homePage1.logout()
   }
   catch(error)
   {

   }
   const commonlib=new CommonPlaywrightLib(page)
  const csvdata=await commonlib.readingValueFromCSV("testdata/Login.csv")
 
  const envrole=process.env.role as string
    for(const data of csvdata)
    {
      
        if(data.Role==envrole)
        {
       await loginPage.login(data.username,data.password)
        }

    }


           const commonlib1=new CommonPlaywrightLib(page)
         await commonlib1.storageState('creds/logincredential.json')

//await loginPage.login("SenthilSmartQAHub","demo")
  const homePage=new HomePage(page);

 await homePage.logout()

// await page.screenshot({path:'./screenshot/login.png',fullPage:true})

// await expect(page).toHaveScreenshot('./screenshot/login.png',{fullPage:true})

await page.waitForLoadState('networkidle')

const s1=await page.screenshot({fullPage:true})

await test.info().attach("login page",{body:s1,contentType:'image/png'})

})



