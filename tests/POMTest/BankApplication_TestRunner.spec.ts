import test from "@playwright/test";
import { HomePage } from "../../pages/HomePage/HomePage";
import { CredtCardAppPage } from "../../pages/CreditCard/CredtCardAppPage";
import { TrackingApplicationStatus } from "../../pages/TrackingPage/TrackApplicationStatus";
import { DebitCardAppPage } from "../../pages/DebitCard/DebitCardAppPage";
import { CommonPlaywrightLib } from "../../Utils/CommonPlaywrightLib";
import dotenv from 'dotenv'
import  "../../Utils/setupHooks"
//dotenv.config({path:'Urls/.env.sit'})

// test.beforeEach("url",async({page})=>
// {
//    await page.goto(process.env.siturl as string)
// })


test('Apply credit Card',async({page})=>{

   const homePage=new HomePage(page);
   const credtCardApp=new CredtCardAppPage(page)
   await homePage.navigateToCreditCardApplicationForm()
   await credtCardApp.fillCreditCardApplication();
   await page.waitForTimeout(10000)
   await credtCardApp.findcreditCardTrackingnumber()
   await homePage.navigateToHomePage()
   await homePage.navigateToTrackApplicationStatus();
      const commonutil=new CommonPlaywrightLib(page)
   const page1= await commonutil.switchToWindow(1) 
   const trackingApplicationStatus=new TrackingApplicationStatus(page1)
   await trackingApplicationStatus.trackYourCreditCardApplicationStatus()
   await trackingApplicationStatus.verifyCreditCardApplicationStatus();
   await page.waitForTimeout(3000)
   await homePage.logout()

})
test('Apply Debit Card',async({page})=>{
    const homePage=new HomePage(page);
    const debitCardApp=new DebitCardAppPage(page)
    await homePage.navigateToDebicreditCardApplicationForm()
    await debitCardApp.fillDebitCardAppForm();
    await debitCardApp.findDebitCardTrackingnumber()
    await homePage.navigateToHomePage()
    await homePage.navigateToTrackApplicationStatus();
      const commonutil=new CommonPlaywrightLib(page)
    const page1= await commonutil.switchToWindow(1) 
    const trackingApplicationStatus=new TrackingApplicationStatus(page1)
    await trackingApplicationStatus.trackYourDebitCardApplicationStatus()
    await trackingApplicationStatus.verifyDebitCardApplicationStatus();
    await page.waitForTimeout(3000)
   await homePage.logout()
 
 })