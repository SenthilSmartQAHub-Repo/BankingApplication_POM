
import { expect, Locator, Page, Selectors } from "@playwright/test";
import { CommonPlaywrightLib } from "../../Utils/CommonPlaywrightLib";


export class DebitCardAppPage
{
    page:Page 
    private readonly fullnameTextBox:Locator
    private readonly genderOptionBox:Locator
    private readonly currentCityTextBox:Locator
    private readonly accountNoTextBox:Locator
    private readonly cardTypeTextBox:Locator
    private readonly applyforDebitClickButton:Locator
    private readonly successMessage:Locator
    private readonly debitCrdTrackingNumText:Locator
    static debitCrdTrackingNumber:string
    private readonly confirmationCheckBox:Locator
  
    
    constructor(page:Page)
    {
     this.page=page
     this.fullnameTextBox= page.locator("#name")
     this.genderOptionBox= page.locator("//input[@value='Male']")
     this.currentCityTextBox= page.getByPlaceholder("Enter your city")
     this.accountNoTextBox= page.locator("#accountNumber")
     this.cardTypeTextBox= page.locator('#cardType');
     this.applyforDebitClickButton= page.locator("//button[text()='Apply for Debit Card']")
     this.successMessage=page.locator("//*[@id='successMessage']/p").first()
     this.debitCrdTrackingNumText=page.locator("#trackingLink").last()
     this.confirmationCheckBox=page.locator("#confirmation")
    


    }
   async fillDebitCardAppForm()
{
const commonLib=new CommonPlaywrightLib(this.page)
const csvdata=await commonLib.readingValueFromCSV("testdata/DebitCard.csv")
await this.fullnameTextBox.fill(csvdata[0].name)
await this.genderOptionBox.check()
await this.currentCityTextBox.fill(csvdata[0].city)
await this.accountNoTextBox.fill(csvdata[0].accountnumber)
await this.cardTypeTextBox.selectOption(csvdata[0].cardtype);
// this.page.on("dialog", async(dialogobj)=>
// {
// await this.page.waitForTimeout(5000)
// dialogobj.accept()
// })

const commonlib= new CommonPlaywrightLib(this.page);

await commonlib.acceptAlert("ok","confirm")
await this.confirmationCheckBox.click();
await this.applyforDebitClickButton.click();
const successMessage=await this.successMessage.textContent();
expect(successMessage).toBe("✅ Your debit card application has been submitted successfully!")

}
    async findDebitCardTrackingnumber(){
        DebitCardAppPage.debitCrdTrackingNumber=await this.debitCrdTrackingNumText.textContent()??''
         expect(DebitCardAppPage.debitCrdTrackingNumber).not.toBeNull()      
   

    }



}