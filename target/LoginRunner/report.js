$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/login.feature");
formatter.feature({
  "name": "Testing login",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am navigating to the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.iNavigatingToTheHomePage()"
});
formatter.write("2021-09-22 08:01:19 PASS: Successfully navigated to the Home page");
formatter.embedding("image/png", "embedded0.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicking SingIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clickingSingInButton()"
});
formatter.write("2021-09-22 08:01:20 PASS: Successfully navigated to Sign in page");
formatter.embedding("image/png", "embedded1.png", null);
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing User1@example.com",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@User1@example.com"
    },
    {
      "name": "@login"
    },
    {
      "name": "@user1"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "Passing \"User1@example.com\" to  \"Email\" field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmLoginInWith(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Passing  \"111111\" to the \"Password\" field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.passingToTheField(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});