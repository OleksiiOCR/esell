package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.WebdriverUtils;

import java.util.List;

public class LoginPage {
    public LoginPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//div[@class='nav-btn btn-standart']")
  //  public WebElement headButtons;
    //   public List<WebElement> headButtons;
    public  List<WebElement> headButtons = WebdriverUtils.Driver().findElements(By.xpath("//div[@class='nav-btn btn-standart']"));

    @FindBy(xpath = "//button[@class='button-am button-am-sn black']")
    public WebElement search;
}

