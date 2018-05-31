package stepDefinition;		

import java.io.FileInputStream;
import java.util.Properties;

import org.openqa.selenium.By;		
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;		
import cucumber.api.java.en.Then;		
import cucumber.api.java.en.When;		

public class youtube {				

    WebDriver driver;			
    		
    @Given("^I am on \"(.*)\" video site$")					
    public void open_the_chrome_and_launch_the_website(String site) throws Throwable							
    {  
       
       System.setProperty("webdriver.chrome.driver", "C:\\Users\\Amir\\Downloads\\chromedriver.exe");					
       driver= new ChromeDriver();					
       driver.manage().window().maximize();			
       driver.get(site);
       Thread.sleep(3000);
       
    }		

    @When("^I Enter \"(.*)\" in Search$")					
    public void enter_the_search_item(String search) throws Throwable 							
    {	
        driver.findElement(By.cssSelector("#search-input input")).sendKeys(search);							
       							
    }		

    @Then("^I click \"Search\"$")					
    public void Reset_the_credential() throws Throwable 							
    {	
    	
       driver.findElement(By.cssSelector("#search-form button[id=search-icon-legacy]")).click();					
       Thread.sleep(3000);
       driver.quit();
    }		
}		

