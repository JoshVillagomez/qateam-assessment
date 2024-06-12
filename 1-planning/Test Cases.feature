Planning:
HOYTS Cinemas Homepage
Objective: Execute functional testing of the HOYTS cinemas main page

Test Plan:

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

Scenario 6: Verify the "Offers & Promotions" section
Given I am on the HOYTS Cinemas main page
Then I should see the "Offers & Promotions" section with information about current offers and promotions

Scenario 7: Verify the "Experiences" section
Given I am on the HOYTS Cinemas main page
Then I should see the "Experiences" section with information about different cinema experiences

Scenario 8: Verify the "Accessibility" information
Given I am on the HOYTS Cinemas main page
Then I should see the "Accessibility" information section

Scenario 9: Verify the footer content
Given I am on the HOYTS Cinemas main page
Then I should see the footer with the copyright information, terms and conditions, and other relevant links

Scenario 10 (Failure Scenario): Verify error message for an invalid movie search
Given I am on the HOYTS Cinemas main page
When I enter an invalid movie title in the search bar and click the search button
Then I should see an error message indicating that no results were found :
“Sorry, we couldn't find any results”