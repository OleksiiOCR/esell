import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty" , "html:target/RegRunner",
                "rerun:target/Rerun_Failed/RegRunner.txt",
                "json:target/RegRunner.json"},
        features = "src/main/resources/features/registration.feature"
        , glue = {"steps"}
        , stepNotifications = true
             //   , tags = "@negative"
        ,tags = "@positive"

       // , tags = "@employeesLogin"

)



public class RegistrationRunner {
}
