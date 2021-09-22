package impls;

import org.openqa.selenium.By;
import pages.LoginPage;
import utils.CucumberLogUtils;
import utils.LocalConfigUtils;
import utils.WebdriverUtils;


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

    public void clickingSignInButton() {

        getPage().headButtons.get(6).click();
        CucumberLogUtils.logPass("Successfully navigated to Sign in page", true);

    }

    public void loginWithLogParametr(String logParametr, String value) {


        WebdriverUtils.Driver().findElement(By.xpath("//div[@class='form-group visible']//input[@placeholder='" + logParametr + "']")).sendKeys(value);


    }

    public void passingPasswordTotheField(String passwordField, String password) {
        WebdriverUtils.Driver().findElement(By.xpath("//div[@class='form-group visible']//input[@placeholder='" + passwordField + "']")).sendKeys(password);


    }
}
