import {expect, test} from '@playwright/test';
import {HoytsCinemasHomePage} from './pageobjects/mainpage'

test('Display the Become a Rewards Member modal', async ({ page }) => {

    
    const mainPage = new HoytsCinemasHomePage(page);
    // Navigate to the desired page
    await page.goto('https://www.hoyts.co.nz/');
      // Click the rewards button
    await mainPage.clickOnLoginLink();
    // Verify the modal is displayed
    await page.waitForSelector('.modal', { state: 'visible' });
    //Click on JoinNow Button on the rewards modal
    await mainPage.clickJoinNowButton();
    //Verify Once the modal is displayed, start filling the required fields
    await mainPage.verifyRewardsHeading();
    await mainPage.fillRewardsCredentials();
    await mainPage.fillFirstName();
    
    await mainPage.fillLastName();
    await mainPage.fillMobileNumber();
    await mainPage.fillDatePicker();
    await page.pause()
    await mainPage.fillPostCode();
    await mainPage.fillPreferredCinema();
    await mainPage.selectRandomGender();
    

    await page.pause()
});