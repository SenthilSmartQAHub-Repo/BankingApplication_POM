import test from "@playwright/test";
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

})



