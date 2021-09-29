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

    @And("Clicking CRM SingIn button")
    public void clickingCRMSingInButton() {
        LoginImpls login = new LoginImpls();
        login.clickingCrmSignInButton();
    }



    public void passingToField(String arg0, String arg1) {
    }

    @And("Passing  {string} to the {string} field")
    public void passingToTheField( String password,String passwordField) {
        LoginImpls impls = new LoginImpls();
        impls.passingPasswordTotheField(passwordField,password);
    }

    @Then("Clicking {string} button")
    public void clickingButton(String button) {
        LoginImpls impls = new LoginImpls();
        impls.clickingButton(button);
    }


    @And("Verifying that I Signed In as a {string} user")
    public void verifyingThatISignedInAsAUser(String username) {
        LoginImpls impls = new LoginImpls();
        impls.verifyingUserNamePage(username);
    }

    @Then("Signing Out")
    public void signingOut() {
        LoginImpls impls = new LoginImpls();
        impls.signingOut();
    }
}

