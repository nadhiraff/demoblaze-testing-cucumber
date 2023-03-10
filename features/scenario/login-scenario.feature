Feature: Demoblaze app login scenario

    Scenario Outline: Succesfully login using correct username password
    Given I am on the front page
    When I try to login with correct credetial
    Then I am succesfully logged in