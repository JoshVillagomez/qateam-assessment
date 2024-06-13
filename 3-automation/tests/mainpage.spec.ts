import {expect, test} from '@playwright/test';
import {HoytsCinemasHomePage} from './pageobjects/mainpage'

test('Display the Become a Rewards Member modal', async ({ page }) => {

    /*await page.goto('https://www.hoyts.co.nz/');
    const login = new HoytsCinemasHomePage(page)
    await login.clickOnLoginLink();
    await page.pause()*/
    const mainPage = new HoytsCinemasHomePage(page);

    // Navigate to the desired page
    await page.goto('https://www.hoyts.co.nz/');
  
    // Click the rewards button
    await mainPage.clickOnLoginLink(page);
  
    // Verify the modal is displayed
    await page.waitForSelector('.modal', { state: 'visible' });
 
});