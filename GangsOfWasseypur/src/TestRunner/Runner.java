package TestRunner;

import org.junit.runner.RunWith;		
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)				
@CucumberOptions(features="Features",
				 tags="@test,@~manual",
                 glue={"stepDefinition"},
                 plugin= {"pretty","html:reports/cucumber-reports",
                		 "json:reports/cucumber-reports/Cucumber.json",
             			"junit:reports/cucumber-reports/Cucumber.xml"},
                 monochrome=true)
public class Runner {

}
