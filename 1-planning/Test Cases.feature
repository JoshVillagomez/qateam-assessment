Planning:
HOYTS Cinemas Homepage
Objective: Execute functional testing of the HOYTS cinemas main page
Test Plan:
Feature: HOYTS Cinemas Main page
As a user
I want to have a good experience in the website
So i can book my favorite movies

Scenario 1: Verify the homepage content
Given I am on the HOYTS Cinemas main page
Then I should see the “Now Showing”, “Events & Festivals” ,”Special Interest”, “Screen Experiences”, "Advance Screenings" and   “Offers & Rewards” sections

Scenario 2: Verify the navigation menu
Given I am on the HOYTS Cinemas main page
When I click on the "Movies" navigation link
Then I should be taken to the "Movies" page

Scenario 3: Verify the search functionality
Given I am on the HOYTS Cinemas main page
When I enter a movie title in the search bar and click the search button
Then I should see the search results for the movie

Scenario 4: Verify the Transition images left and right buttons functionality
Given I am on the HOYTS Cinemas main page
When I click on the transition images buttons 
Then The next movie's image should be displayed

Scenario 5: Verify the "HOYTS Rewards" section
Given I am on the HOYTS Cinemas homepage
Then I should see the "HOYTS Rewards" section with information about the different rewards

Scenario 6: Verify the "Login" section
Given I am on the HOYTS Cinemas main page
When I click on the "Login" link in the top right corner
Then I should see the "Sign in to My Rewards" promt displayed

Scenario 7: Attempt to login with an invalid email
Given I am on the HOYTS Cinemas main page
When I click the "Login" link in the top right corner
Then the "Sign in to My Rewards" promt is displayed
When I enter an invalid email address
And I enter a valid password
And I click the "Login" button
Then an error message is displayed indicating that the email is invalid

Scenario 8: Verify the "Experiences" information
Given I am on the HOYTS Cinemas main page
Then I should see the "Experiences" information section

Scenario 9: Verify the footer content
Given I am on the HOYTS Cinemas main page
Then I should see the footer with the copyright information, terms and conditions, and other relevant links

Scenario 10 (Failure Scenario): Verify error message for an invalid movie search (In this scenario when we input "Avengers Endgame" the page displays results even when it shouldnt.)
Given I am on the HOYTS Cinemas main page
When I enter an invalid movie title in the search bar and click the search button
Then I should see an error message indicating that no results were found :
“Sorry, we couldn't find any results”