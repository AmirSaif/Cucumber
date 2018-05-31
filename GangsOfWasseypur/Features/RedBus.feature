@test
Feature: Login to flipkart and search for IPhoneX.  

Scenario Outline: Search for IPhoneX on flipkart.

Given I am on "<flipkart>" site 			
When I Enter "<Mobile_Phones>" in Search bar 			
Then I click on "Search"

Examples:

|flipkart|Mobile_Phones|
|http://www.flipkart.com|IPhoneX|

