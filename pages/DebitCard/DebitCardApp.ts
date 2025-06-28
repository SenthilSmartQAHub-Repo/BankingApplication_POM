
import { expect, Locator, Page, Selectors } from "@playwright/test";


export class DebitCardApp
{
    page:Page 
    private readonly fullnameTextBox:Locator
    private readonly addressTextBox:Locator
    private readonly accountNoTextBox:Locator
    private readonly cardTypeTextBox:Locator
    private readonly applyforDebitClickButton:Locator
    private readonly successMessage:Locator
    private readonly debitCrdTrackingNumText:Locator
    static debitCrdTrackingNumber:string
    private readonly homePageClickbutton:Locator
    
    constructor(page:Page)
    {
     this.page=page
     this.fullnameTextBox= page.locator("#name")
     this.addressTextBox= page.locator("#address")
     this.accountNoTextBox= page.locator("#accountNumber")
     this.cardTypeTextBox= page.locator('#cardType');
     this.applyforDebitClickButton= page.locator("//button[text()='Apply for Debit Card']")
     this.successMessage=page.locator("//*[@id='successMessage']/p").first()
     this.debitCrdTrackingNumText=page.locator("#trackingLink").last()
     this.homePageClickbutton=page.locator("//a[contains(text(),'Home Page')]")


    }
    async fillDebitCardAppForm()
    {
    
        await this.fullnameTextBox.fill("Arun")
        await this.addressTextBox.fill("18001 Richmond place drive")
        await this.accountNoTextBox.fill("12345678901234")
        await this.cardTypeTextBox.selectOption('Platinum');
        await this.applyforDebitClickButton.click();
        const successMessage=await this.successMessage.textContent();
        expect(successMessage).toBe("✅ Your debit card application has been submitted successfully!")
        

    }

    async findDebitCardTrackingnumber(){
        DebitCardApp.debitCrdTrackingNumber=await this.debitCrdTrackingNumText.textContent()??''
         expect(DebitCardApp.debitCrdTrackingNumber).not.toBeNull()      
   

    }

        async navigateTohomePage(){
         
            await this.page.goto("https://playwrightautomationtesting.blogspot.com/2025/06/online-banking.html")
            await expect(this.page).toHaveURL("https://playwrightautomationtesting.blogspot.com/2025/06/online-banking.html")


    }

}