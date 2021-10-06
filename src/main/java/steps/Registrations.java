package steps;


import impls.registrImpls;
import io.cucumber.java.en.Then;

public class Registrations {



    @Then("I am registering with following {string} and {string}")
    public void iAmRegisteringWithFollowingAnd(String users, String passwords) {
        registrImpls impls = new registrImpls();
        impls.registringNewUser(users, passwords);
    }


}
