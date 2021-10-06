$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/registration.feature");
formatter.feature({
  "name": "Testing registration page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@registration"
    },
    {
      "name": "@positive"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "I am registering with following \"\u003cusers\u003e\" and \"\u003cpasswords\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Clicking \"Create Account\" button",
  "keyword": "Then "
});
formatter.step({
  "name": "Verifying that I Signed In as a \"\u003cusers\u003e\" user",
  "keyword": "And "
});
formatter.step({
  "name": "Signing Out",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "users",
        "passwords"
      ]
    },
    {
      "cells": [
        "oleksi1@yahoo.com",
        "123"
      ]
    },
    {
      "cells": [
        "spartan1@gmail.com",
        "wwww"
      ]
    },
    {
      "cells": [
        "hello1@org.com",
        "0000"
      ]
    }
  ]
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
formatter.write("2021-10-05 20:50:36 PASS: Successfully navigated to the Home page");
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
formatter.write("2021-10-05 20:50:38 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicking \"Register\" option",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.clickingOption(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@registration"
    },
    {
      "name": "@positive"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "I am registering with following \"oleksi1@yahoo.com\" and \"123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrations.iAmRegisteringWithFollowingAnd(String,String)"
});
formatter.write("2021-10-05 20:50:38 PASS: Passing Login and password");
formatter.embedding("image/png", "embedded1.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicking \"Create Account\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.clickingButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifying that I Signed In as a \"oleksi1@yahoo.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 20:50:46 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"oleksi1@yahoo.com\" user(file:src/main/resources/features/registration.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Signing Out",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.signingOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
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
formatter.write("2021-10-05 20:50:51 PASS: Successfully navigated to the Home page");
formatter.embedding("image/png", "embedded3.png", null);
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
formatter.write("2021-10-05 20:50:53 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicking \"Register\" option",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.clickingOption(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@registration"
    },
    {
      "name": "@positive"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "I am registering with following \"spartan1@gmail.com\" and \"wwww\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrations.iAmRegisteringWithFollowingAnd(String,String)"
});
formatter.write("2021-10-05 20:50:53 PASS: Passing Login and password");
formatter.embedding("image/png", "embedded4.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicking \"Create Account\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.clickingButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifying that I Signed In as a \"spartan1@gmail.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 20:51:01 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"spartan1@gmail.com\" user(file:src/main/resources/features/registration.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Signing Out",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.signingOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
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
formatter.write("2021-10-05 20:51:06 PASS: Successfully navigated to the Home page");
formatter.embedding("image/png", "embedded6.png", null);
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
formatter.write("2021-10-05 20:51:08 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicking \"Register\" option",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.clickingOption(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@registration"
    },
    {
      "name": "@positive"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "I am registering with following \"hello1@org.com\" and \"0000\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrations.iAmRegisteringWithFollowingAnd(String,String)"
});
formatter.write("2021-10-05 20:51:08 PASS: Passing Login and password");
formatter.embedding("image/png", "embedded7.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicking \"Create Account\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.clickingButton(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verifying that I Signed In as a \"hello1@org.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 20:51:16 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"hello1@org.com\" user(file:src/main/resources/features/registration.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Signing Out",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.signingOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});