

import { expect, Locator, Page } from "@playwright/test";
import { CredtCardApp } from "../CreditCard/CredtCardApp";
import { DebitCardApp } from "../DebitCard/DebitCardApp";


export class TrackingApplicationStatus
{
    page:Page
    private readonly trackingNoTextBox:Locator
    private readonly checkStatusClickButton:Locator
    private readonly checkTrackingNumber:Locator
    static trackingStatus:string
  
    
    constructor(page:Page)
    {
     this.page=page
     this.trackingNoTextBox= page.locator("#trackId")
     this.checkStatusClickButton=page.locator("//button[text()='Check Status']")
     this.checkTrackingNumber=page.locator("#statusBox")

    }
   async trackYourCreditCardApplicationStatus(){

    await this.trackingNoTextBox.fill(CredtCardApp.creditTrackingNumber)
    await this.checkStatusClickButton.click();
    

   }

   async verifyCreditCardApplicationStatus(){
    TrackingApplicationStatus.trackingStatus =await this.checkTrackingNumber.textContent()??''
    expect(TrackingApplicationStatus.trackingStatus).toBe(`Status for ${CredtCardApp.creditTrackingNumber}: In Progress`)


   }
   async trackYourDebitCardApplicationStatus(){

    await this.trackingNoTextBox.fill(DebitCardApp.debitCrdTrackingNumber)
    await this.checkStatusClickButton.click();

   }

   async verifyDebitCardApplicationStatus(){
    TrackingApplicationStatus.trackingStatus =await this.checkTrackingNumber.textContent()??''
    expect(TrackingApplicationStatus.trackingStatus).toBe(`Status for ${DebitCardApp.debitCrdTrackingNumber}: In Progress`)

   }

}