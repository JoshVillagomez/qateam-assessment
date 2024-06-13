import { Locator, Page, expect } from "@playwright/test";
import { setTimeout } from "timers";

export class HoytsCinemasHomePage {
  
  private page: Page;
  private iframeDisplayed: Locator
  private readonly searchInputLocator: Locator
  private readonly loginButtonLocator: Locator
  private readonly emailInputBox: Locator
  private readonly passwordInputBox: Locator
  private readonly signInButtonLocator: Locator
  private readonly emailEmptyMessage:Locator
  private readonly emailOrPasswordErrorMessage: Locator
  private readonly joinNowButton: Locator
  private readonly rewardsHeading: Locator
  private readonly rewardsEmailAddressTextBox: Locator
  private readonly rewardPasswordTextBox: Locator
  private readonly rewardFirstName: Locator
  private readonly rewardLastName: Locator
  private readonly rewardMobileNumber: Locator
  private readonly datePicker: Locator;
  private readonly postCodeInput: Locator;
  private readonly femaleRadio: Locator;
  private readonly maleRadio: Locator;
  private readonly otherRadio: Locator;
  private readonly radioButtons: Locator[];
  private preferredCinemaDropdown: Locator;
  private myRewardsModalButton: Locator;
  private rewardsButtonXPath: Locator;
  private rewardsButton: Locator;
  private iframelocator: Locator;
  private readonly nowShowingContainerLocator: Locator
  private readonly advanceScreeningsContainerLocator: Locator
  private readonly eventsAndFestivalsContainerLocator: Locator
  private readonly hoytsMembersRewardsContainerLocator: Locator


 
  constructor(page: Page){
    this.page = page;
    this.iframeDisplayed = this.page.locator('//iframe[@id=\'launcher\']');
    const iframelocator = page.frameLocator('//iframe[@id=\'launcher\']')
    this.searchInputLocator = page.getByRole('textbox', {name: 'Enter search terms'});
    this.loginButtonLocator =  page.getByRole('button', {name: 'My Rewards'});
    this.emailInputBox = page.locator('//div[@class="form-placeholder"]/label[text()="Email address"]');
    this.passwordInputBox = page.locator('//div[@class="form-placeholder"]/label[text()="Password"]');
    this.signInButtonLocator = page.getByRole('button', {name: 'SIGN IN'});
    this.rewardsButtonXPath = page.locator('//button[@class=\'header__profile-button\']');
    this.emailEmptyMessage = page.locator('//span[@class="form-error"]');
    this.emailOrPasswordErrorMessage = page.locator('//span[contains(., "Sorry, that email or password seems to be incorrect. Please try again or contact us")]');
    this.nowShowingContainerLocator =  page.getByRole('textbox', {name: 'Enter search terms'});
    this.joinNowButton =  page.getByRole('button', {name: 'Join Now'});
    this.rewardsHeading =  page.getByRole('heading', {name: 'Sign in to My Rewards'});
    this.rewardsEmailAddressTextBox =  page.getByRole('textbox', {name: 'Email address * Email address *'});
    this.rewardPasswordTextBox = page.locator('//input[@type="password"]');
    
    
    this.rewardFirstName = page.locator('//div[@class=\'form-column form-column--full\']/div[@class=\'form-placeholder\']/input[@class=\'form-placeholder__input\' and following-sibling::label[contains(., \'First name\')]]');
    this.rewardLastName = page.locator('//div[@class=\'form-column form-column--full\']/div[@class=\'form-placeholder\']/input[@class=\'form-placeholder__input\' and following-sibling::label[contains(., \'Last name\')]]');
    this.rewardMobileNumber = page.locator('//div[@class=\'form-column form-column--full\']/div[@class=\'form-placeholder\']/input[@class=\'form-placeholder__input\' and following-sibling::label[contains(., \'Mobile\')]]'); 
    this.datePicker = page.locator('//input[@class=\'form-placeholder__input form-placeholder__input--date\' and @id=\'form-placeholder__input--sign-in-date-of-birth\']');
    this.postCodeInput = page.locator('#form-placeholder__input--sign-in-post-code');
    this.femaleRadio = page.locator('#form-radio__input--sign-in-female');
    this.maleRadio = page.locator('#form-radio__input--sign-in-male');
    this.otherRadio = page.locator('#form-radio__input--sign-in-other');
    this.radioButtons = [this.femaleRadio, this.maleRadio, this.otherRadio];
    this.preferredCinemaDropdown = page.locator('#form-placeholder__select--preferredCinema');
    this.advanceScreeningsContainerLocator =  page.getByRole('textbox', {name: 'Enter search terms'});
    this.eventsAndFestivalsContainerLocator =  page.getByRole('textbox', {name: 'Enter search terms'});
    this.rewardsButton = page.locator('//div[@id=\'header-profile\']')
  }

 
  async clickOnLoginLink(): Promise<void> {
   // Wait for the rewards button to be visible     
    await this.iframeDisplayed.waitFor({ state: 'visible', timeout: 10000 });
    // Click the rewards button
    await this.rewardsButton.click();
    // Wait for the login page to be displayed
    await this.rewardsHeading.waitFor({ state: 'visible', timeout: 10000 });
  }

  private async waitUntilJoinNowButtonIsVisible(): Promise<void> {
    await this.joinNowButton.waitFor({ state: 'visible', timeout: 10000 });
  }

  async clickJoinNowButton(): Promise<void> {
    await this.waitUntilJoinNowButtonIsVisible();
    await this.joinNowButton.click();
  }
  // Verify the rewards heading is displayed
  async verifyRewardsHeading() {
    await this.rewardsHeading.isVisible();
    console.log('Rewards heading is displayed');
  }
  // Fill the email and password textboxes
  async fillRewardsCredentials() {
    await this.rewardsEmailAddressTextBox.fill('testuser@example.com');
    await this.rewardPasswordTextBox.fill('MyPassword123');
    console.log('Email and password fields filled');
  }
  // Fill the first name input
async fillFirstName() {
  await this.rewardFirstName.fill('John');
  console.log('First name filled');
}

// Fill the last name input
async fillLastName() {
  await this.rewardLastName.fill('Doe');
  console.log('Last name filled');
}

// Fill the mobile number input
async fillMobileNumber() {
  await this.rewardMobileNumber.fill('1234567890');
  console.log('Mobile number filled');
}

// Fill the date picker
async fillDatePicker() {
  await this.datePicker.click();
  await this.datePicker.fill('13-06-1984');
  console.log('Date picker filled');
}

// Fill the post code input
async fillPostCode() {
  await this.postCodeInput.fill('12345');
  console.log('Post code filled');
}

// Fill a random radio button
/*async fillRandomRadioButton() {
  const randomIndex = Math.floor(Math.random() * this.radioButtons.length);
  await this.radioButtons[randomIndex].check();
  console.log(`Radio button "${this.radioButtons[randomIndex].locator().toString()}" checked`);
}*/

public async selectRandomGender(): Promise<void> {
  const randomIndex = Math.floor(Math.random() * this.radioButtons.length);
  const selectedRadio = this.radioButtons[randomIndex];
  await selectedRadio.check();
}

// Fill the preferred cinema dropdown
async fillPreferredCinema() {
  await this.preferredCinemaDropdown.selectOption('Cinema A');
  console.log('Preferred cinema selected');
}





  //async fillOutRewardsModal()

}