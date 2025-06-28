import test from "@playwright/test";
import { LoginPage } from "../../pages/HomePage/LoginPage";
import { HomePage } from "../../pages/HomePage/HomePage";
import { CredtCardApp } from "../../pages/CreditCard/CredtCardApp";
import { TrackingApplicationStatus } from "../../pages/TrackingPage/TrackApplicationStatus";
import { DebitCardApp } from "../../pages/DebitCard/DebitCardApp";


test('Apply credit Card',async({page})=>{


   const loginPage=new LoginPage(page);
   const homePage=new HomePage(page);
   const credtCardApp=new CredtCardApp(page)
   const trackingApplicationStatus=new TrackingApplicationStatus(page)
   await page.goto("https://playwrightautomationtesting.blogspot.com/2025/06/banking-application.html")
   await loginPage.login()
   await homePage.navigateToCreditCardApplicationForm()
   await credtCardApp.fillCreditCardApplication();
   await credtCardApp.findcreditCardTrackingnumber()
   await homePage.navigateTohomePage()
   await homePage.navigateToTrackApplicationStatus();
   await trackingApplicationStatus.trackYourCreditCardApplicationStatus()
   await trackingApplicationStatus.verifyCreditCardApplicationStatus();
   await page.waitForTimeout(3000)
 

})
test('Apply Debit Card',async({page})=>{


    const loginPage=new LoginPage(page);
    const homePage=new HomePage(page);
    const debitCardApp=new DebitCardApp(page)
    const trackingApplicationStatus=new TrackingApplicationStatus(page)
    await page.goto("https://playwrightautomationtesting.blogspot.com/2025/06/banking-application.html")
    await loginPage.login()
    await homePage.navigateToDebicreditCardApplicationForm()
    await debitCardApp.fillDebitCardAppForm();
    await debitCardApp.findDebitCardTrackingnumber()
    await homePage.navigateTohomePage()
    await homePage.navigateToTrackApplicationStatus();
    await trackingApplicationStatus.trackYourDebitCardApplicationStatus()
    await trackingApplicationStatus.verifyDebitCardApplicationStatus();
    await page.waitForTimeout(3000)
  
 
 })