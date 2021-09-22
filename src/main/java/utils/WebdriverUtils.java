package utils;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import java.util.concurrent.TimeUnit;

public class WebdriverUtils {


    private static WebDriver driver;

    private WebdriverUtils() {

    }

    public static WebDriver Driver() {
        if (driver == null) {
            String browserType = LocalConfigUtils.getProperty("browser");
            System.out.println("browser: " + browserType);
            switch (browserType.toLowerCase()) {
                case "firefox":
                    WebDriverManager.firefoxdriver().setup();
                    driver = new FirefoxDriver();
                    break;
                default:
                    WebDriverManager.chromedriver().setup();
                    driver = new ChromeDriver();
                    break;

            }
        }
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        return driver;




  }
          public static void closeWebDriver () {
              if (driver != null) {
                  driver.quit();
                  driver = null;
              }
          }
      }

