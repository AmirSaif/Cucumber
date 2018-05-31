@test
Feature: Login to youtube and search for IPhoneX.  

Scenario Outline: Search for IPhoneX on youtube.

Given I am on "<youtube>" video site 			
When I Enter "<Mobile_Phones>" in Search 			
Then I click "Search"

Examples:

|youtube|Mobile_Phones|
|https://www.youtube.com/|IPhoneX|

