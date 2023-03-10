Feature: Demoblaze app logout scenario

    Scenario Outline: Succesfully log out account
    Given I am on the front page
    When I try to login with correct credetial
    And I am succesfully logged in
    And I click logout button
    Then I am succesfully logged out

    
