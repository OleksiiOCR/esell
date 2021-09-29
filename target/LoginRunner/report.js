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
formatter.write("2021-09-28 22:00:00 PASS: Successfully navigated to the Home page");
formatter.embedding("image/png", "embedded0.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicking CRM SingIn button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.clickingCRMSingInButton()"
});
formatter.write("2021-09-28 22:00:02 PASS: Successfully navigated to Sign in page");
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
formatter.step({
  "name": "Clicking \"Sign In\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.clickingButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifying that I Signed In as a \"User1@example.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.write("2021-09-28 22:00:07 PASS: Signed In with user1@example.comlogin");
formatter.embedding("image/png", "embedded2.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Signing Out",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.signingOut()"
});
formatter.write("2021-09-28 22:00:08 PASS: Successfully Sign in page");
formatter.embedding("image/png", "embedded3.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});