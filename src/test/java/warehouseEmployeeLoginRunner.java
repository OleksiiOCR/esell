import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty" , "html:target/WarEmplRunr",
                "rerun:target/Rerun_Failed/WarEmplRunr.txt",
                "json:target/WarEmplRunr.json"},
        features = "src/main/resources/features/warehouseEmployeesLogs.feature" ,
        glue = {"steps"}
        , stepNotifications = true
        //, tags = "@employeesLogin"
        ,tags = "@negative"

)




public class warehouseEmployeeLoginRunner {
}
