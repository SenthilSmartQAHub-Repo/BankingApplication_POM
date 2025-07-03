import { Locator, Page } from "@playwright/test";


export class HomePage
{
    page:Page
    private creditCardClickButton:Locator
    private debitCardClickButton:Locator
    private trackStatusClickButton:Locator
    private homePagebutton:Locator
    private readonly goBackButton:Locator
    private readonly logoutButton:Locator
    
    constructor(page:Page)
    {
     this.page=page
     this.creditCardClickButton= page.locator("//a[contains(text(),'Credit Card Application')]")
     this.debitCardClickButton= page.locator("//a[contains(text(),'Debit Card Application')]")
     this.trackStatusClickButton= page.locator("//a[contains(text(),'Track Application Status')]")
     this.goBackButton=page.locator("//a[@class='back-button']")
     this.homePagebutton=page.locator("//a[@class='home-button']")
     this.logoutButton=page.getByText("Logout")

    }

    async logout()
    {
        await this.page.waitForLoadState('domcontentloaded')
        await this.logoutButton.click()
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

    async navigateToHomePage(){
         
        await this.homePagebutton.click();


  }
}
