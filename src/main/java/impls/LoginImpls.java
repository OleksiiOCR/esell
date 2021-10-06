package impls;



import org.openqa.selenium.By;
import pages.LoginPage;
import utils.CucumberLogUtils;
import utils.LocalConfigUtils;
import utils.MiscUtils;
import utils.WebdriverUtils;

import java.util.Locale;


public class LoginImpls {
    private LoginPage loginPage;

    private LoginPage getPage() {
        if (loginPage == null) {
            loginPage = new LoginPage(WebdriverUtils.Driver());
        }
        return loginPage;
    }

    public void navigatingToHomePage() {
        WebdriverUtils.Driver().get(LocalConfigUtils.getProperty("url"));
        //  if (WebdriverUtils.Driver().getTitle().contains();

        CucumberLogUtils.logPass("Successfully navigated to the Home page", true);

    }

    public void clickingCrmSignInButton() {
        MiscUtils.highlightElement(
                getPage().headButtons.get(6)).click();
        CucumberLogUtils.logPass("Successfully navigated to Sign in page", false);

    }

    public void loginWithLogParametr(String logParametr, String value) {


        WebdriverUtils.Driver().findElement(By.xpath
                ("//div[@class='form-group visible']//input[@placeholder='" + logParametr + "']")).sendKeys(value);


    }

    public void passingPasswordTotheField(String passwordField, String password) {
        WebdriverUtils.Driver().findElement(By.xpath
                ("//div[@class='form-group visible']//input[@placeholder='" + passwordField + "']")).sendKeys(password);


    }

    public void clickingButton(String button) {
        MiscUtils.sleep(2000);
        MiscUtils.highlightElement(
                WebdriverUtils.Driver().findElement(By.xpath
                        ("//div[@class='btn-blue']//span[contains(text() , '" + button + "')]"))).click();

    }

    public void verifyingUserNamePage(String username) {
        try {
            username = username.toLowerCase(Locale.ROOT);
            String userName = WebdriverUtils.Driver().findElement(By.xpath
                    ("//div[@class='nav-btn btn-standart']//span[contains(text(),'" + username + "')]")).getText().toLowerCase(Locale.ROOT);
            if (username.contains(userName)) {


                CucumberLogUtils.logPass("Signed In with " + username + "login", false);

            }
        } catch
        (Exception e) {
            CucumberLogUtils.logFail("Sign In hase failed", true);
        }
    }

    public void signingOut() {
        MiscUtils.sleep(1000);
        MiscUtils.highlightElement(
                getPage().headButtons.get(7)).click();
        CucumberLogUtils.logPass("Successfully Sign in page", false);


    }

    public void selectingRegisterOption(String option) {
        WebdriverUtils.Driver().findElement(By.xpath
                ("//div[@class='nav-btn passive']//span[contains(text(),'"+option+"')]")).click();
    }


}
