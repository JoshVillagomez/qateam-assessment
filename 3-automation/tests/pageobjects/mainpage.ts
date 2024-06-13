import { Locator, Page, expect } from "@playwright/test";

export class HoytsCinemasHomePage {
  
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
  private readonly nowShowingContainerLocator: Locator
  private readonly advanceScreeningsContainerLocator: Locator
  private readonly eventsAndFestivalsContainerLocator: Locator
  private readonly hoytsMembersRewardsContainerLocator: Locator


 
  constructor(page: Page){
    
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
    this.rewardsHeading =  page.getByRole('heading', {name: 'Become a Rewards Member'});
    this.rewardsEmailAddressTextBox =  page.getByRole('textbox', {name: 'Email address * Email address *'});
    this.rewardPasswordTextBox = page.locator('//input[@type="password"]');
    this.rewardsHeading =  page.getByRole('heading', {name: 'Become a Rewards Member'});
    this.rewardsHeading =  page.getByRole('heading', {name: 'Become a Rewards Member'});
    this.rewardFirstName = page.locator('//label[text()="First name "]');
    this.rewardLastName = page.locator('//label[text()="Last name ""]');
    this.rewardMobileNumber = page.locator('//label[text()="Mobile ""]'); 
    this.datePicker = page.locator('.form-placeholder__input--date.is-error');
    this.postCodeInput = page.locator('#form-placeholder__input--sign-in-post-code');
    this.femaleRadio = page.locator('#form-radio__input--sign-in-female');
    this.maleRadio = page.locator('#form-radio__input--sign-in-male');
    this.otherRadio = page.locator('#form-radio__input--sign-in-other');
    this.radioButtons = [this.femaleRadio, this.maleRadio, this.otherRadio];
    this.preferredCinemaDropdown = page.locator('#form-placeholder__select--preferredCinema');
    this.advanceScreeningsContainerLocator =  page.getByRole('textbox', {name: 'Enter search terms'});
    this.eventsAndFestivalsContainerLocator =  page.getByRole('textbox', {name: 'Enter search terms'});
  }

 /* async clickOnLoginLink(){
    await this.rewardsButtonXPath.click()
  }*/

    async clickOnLoginLink(page: Page): Promise<void> {
      const rewardsButton = page.locator('//button[@class=\'header__profile-button\']');
      await rewardsButton.click();
    }

}


