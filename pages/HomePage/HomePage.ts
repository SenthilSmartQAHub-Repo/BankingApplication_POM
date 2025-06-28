import { Locator, Page } from "@playwright/test";


export class HomePage
{
    page:Page
    private creditCardClickButton:Locator
    private debitCardClickButton:Locator
    private trackStatusClickButton:Locator
    
    constructor(page:Page)
    {
     this.page=page
     this.creditCardClickButton= page.locator("//a[contains(text(),'Credit Card Application')]")
     this.debitCardClickButton= page.locator("//a[contains(text(),'Debit Card Application')]")
     this.trackStatusClickButton= page.locator("//a[contains(text(),'Track Application Status')]")


    }



    async navigateToCreditCardApplicationForm()
    {
    
        await this.creditCardClickButton.click()
    }

    async navigateToDebicreditCardApplicationForm()
    {
    
        await this.debitCardClickButton.click()
    }
    async navigateToTrackApplicationStatus()
    {
    
        await this.trackStatusClickButton.click()
    }

    async navigateTohomePage(){
         

      await this.page.goto("https://playwrightautomationtesting.blogspot.com/2025/06/online-banking.html")


        }
}
