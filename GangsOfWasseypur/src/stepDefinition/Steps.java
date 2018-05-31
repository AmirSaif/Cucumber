package stepDefinition;		


import POM.pom;

import java.io.FileInputStream;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;		
import cucumber.api.java.en.Then;		
import cucumber.api.java.en.When;		

public class Steps {				

    WebDriver driver;
    
    Properties obj = new Properties();
    FileInputStream objfile = null ;
    
    
    		
    @Given("^I am on \"(.*)\" site$")					
    public void open_the_chrome_and_launch_the_application(String site) throws Throwable							
    {  
       objfile=new FileInputStream("C:\\Users\\Amir\\Desktop\\GangsOfWasseypur\\src\\Properties\\youtube.properties");
       obj.load(objfile);
       String driverName = obj.getProperty("chromeDriverName");
       String driverPath = obj.getProperty("driverPath1");
       System.out.println(driverName);
       System.out.println(driverPath);
       System.setProperty(driverName, driverPath);
       driver= new ChromeDriver();					
       driver.manage().window().maximize();			
       driver.get(site);
       Thread.sleep(3000);
        
       driver.findElement( pom.cross_btn).click();
    }		

    @When("^I Enter \"(.*)\" in Search bar$")					
    public void enter_the_search_item(String search) throws Throwable 							
    {		
       driver.findElement(pom.search_box).sendKeys(search);							
       							
    }		

    @Then("^I click on \"Search\"$")					
    public void Reset_the_credential() throws Throwable 							
    {		
       driver.findElement(pom.searchButton).click();					
       Thread.sleep(3000);
       driver.quit();
    }		
}		

