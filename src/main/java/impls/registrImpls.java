package impls;

import org.apache.http.util.Asserts;
import org.junit.Assert;
import org.openqa.selenium.By;
import pages.LoginPage;
import utils.CucumberLogUtils;
import utils.WebdriverUtils;

public class registrImpls {
    private LoginPage loginPage;

    private LoginPage getPage() {
        if (loginPage == null) {
            loginPage = new LoginPage(WebdriverUtils.Driver());
        }
        return loginPage;
    }

    public void registringNewUser(String users, String passwords) {
        try {
            WebdriverUtils.Driver().findElement(By.xpath
                    ("//div[@class='form-group visible']//input[@placeholder='Email']")).sendKeys(users);
            WebdriverUtils.Driver().findElement(By.xpath
                    ("//div[@class='form-group visible']//input[@placeholder='Password']")).sendKeys(passwords);
            WebdriverUtils.Driver().findElement(By.xpath
                    ("//div[@class='form-group visible']//input[@placeholder='Confirm Password']")).sendKeys(passwords);
            WebdriverUtils.Driver().findElement(By.xpath("//div[@id='check-box']")).click();
            CucumberLogUtils.logPass("Passing Login and password", true);
        } catch (Exception e) {

            CucumberLogUtils.logFail("login and password was not passed", true);
        }
    }
}
