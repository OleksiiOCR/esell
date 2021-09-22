package steps;

import impls.LoginImpls;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class LoginSteps {
    @Given("I am navigating to the home page")
    public void iNavigatingToTheHomePage() {
        LoginImpls login = new LoginImpls();
        login.navigatingToHomePage();
    }


    @Then("Passing {string} to  {string} field")
    public void iAmLoginInWith(String value , String logParametr) {
        LoginImpls login = new LoginImpls();
        login.loginWithLogParametr(logParametr,value);

    }

    @And("Clicking SingIn button")
    public void clickingSingInButton() {
        LoginImpls login = new LoginImpls();
        login.clickingSignInButton();
    }



    public void passingToField(String arg0, String arg1) {
    }

    @And("Passing  {string} to the {string} field")
    public void passingToTheField( String password,String passwordField) {
        LoginImpls impls = new LoginImpls();
        impls.passingPasswordTotheField(passwordField,password);
    }
}
