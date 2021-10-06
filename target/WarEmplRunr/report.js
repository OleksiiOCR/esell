$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/warehouseEmployeesLogs.feature");
formatter.feature({
  "name": "testing warehouse employees",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@employees"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@warehouse"
    }
  ]
});
formatter.step({
  "name": "Passing \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\" to Sign In window",
  "keyword": "Then "
});
formatter.step({
  "name": "Clicking \"Sign In\" button",
  "keyword": "Then "
});
formatter.step({
  "name": "Verifying that I Signed In as a \"\u003cEmail\u003e\" user",
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
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "packer1@example.com",
        "paker"
      ]
    },
    {
      "cells": [
        "picker@example.com",
        "paker"
      ]
    },
    {
      "cells": [
        "picker2@example.com",
        "----"
      ]
    },
    {
      "cells": [
        "checker@example.com",
        "picker"
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
formatter.write("2021-10-05 21:38:01 PASS: Successfully navigated to the Home page");
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
formatter.write("2021-10-05 21:38:03 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@employees"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@warehouse"
    }
  ]
});
formatter.step({
  "name": "Passing \"packer1@example.com\" and \"paker\" to Sign In window",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.passingAndToSignInWindow(String,String)"
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
  "name": "Verifying that I Signed In as a \"packer1@example.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:38:11 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"packer1@example.com\" user(file:src/main/resources/features/warehouseEmployeesLogs.feature:42)\r\n",
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
formatter.write("2021-10-05 21:38:16 PASS: Successfully navigated to the Home page");
formatter.embedding("image/png", "embedded2.png", null);
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
formatter.write("2021-10-05 21:38:17 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@employees"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@warehouse"
    }
  ]
});
formatter.step({
  "name": "Passing \"picker@example.com\" and \"paker\" to Sign In window",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.passingAndToSignInWindow(String,String)"
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
  "name": "Verifying that I Signed In as a \"picker@example.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:38:25 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"picker@example.com\" user(file:src/main/resources/features/warehouseEmployeesLogs.feature:42)\r\n",
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
formatter.write("2021-10-05 21:38:30 PASS: Successfully navigated to the Home page");
formatter.embedding("image/png", "embedded4.png", null);
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
formatter.write("2021-10-05 21:38:32 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@employees"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@warehouse"
    }
  ]
});
formatter.step({
  "name": "Passing \"picker2@example.com\" and \"----\" to Sign In window",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.passingAndToSignInWindow(String,String)"
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
  "name": "Verifying that I Signed In as a \"picker2@example.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:38:40 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"picker2@example.com\" user(file:src/main/resources/features/warehouseEmployeesLogs.feature:42)\r\n",
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
formatter.write("2021-10-05 21:38:45 PASS: Successfully navigated to the Home page");
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
formatter.write("2021-10-05 21:38:46 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@employees"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@warehouse"
    }
  ]
});
formatter.step({
  "name": "Passing \"checker@example.com\" and \"picker\" to Sign In window",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.passingAndToSignInWindow(String,String)"
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
  "name": "Verifying that I Signed In as a \"checker@example.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:38:54 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"checker@example.com\" user(file:src/main/resources/features/warehouseEmployeesLogs.feature:42)\r\n",
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