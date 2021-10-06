$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/features/login.feature");
formatter.feature({
  "name": "testing login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@outline"
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
        "User1@example.com",
        "111 111"
      ]
    },
    {
      "cells": [
        "User1@example.co",
        "111111"
      ]
    },
    {
      "cells": [
        "User3@example.com",
        "11!1111"
      ]
    },
    {
      "cells": [
        "User@example.com",
        "111111"
      ]
    },
    {
      "cells": [
        "m.korostyl@gmail.com.com",
        "qwerty"
      ]
    },
    {
      "cells": [
        "m.korostyl@gmail.com.com",
        "QWERTY"
      ]
    },
    {
      "cells": [
        "m.korostyl@gmail.com.com",
        "qw erty"
      ]
    },
    {
      "cells": [
        "x0535260174.@gmail.com",
        "53526"
      ]
    },
    {
      "cells": [
        ".x0535260174@gmail.com",
        "53526"
      ]
    },
    {
      "cells": [
        "babaieva.vafa@gmail.com",
        "123456."
      ]
    },
    {
      "cells": [
        "babaieva.vaf_a@gmail.com",
        "-23456"
      ]
    },
    {
      "cells": [
        "tatjana.lukasova@gmail.comtatjana.lukasova@gmail.com",
        "777777"
      ]
    },
    {
      "cells": [
        "tatjana.lukasova@gmail.clm",
        "777777"
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
formatter.write("2021-10-05 21:22:28 PASS: Successfully navigated to the Home page");
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
formatter.write("2021-10-05 21:22:29 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "Passing \"User1@example.com\" and \"111 111\" to Sign In window",
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
  "name": "Verifying that I Signed In as a \"User1@example.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:22:37 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"User1@example.com\" user(file:src/main/resources/features/login.feature:61)\r\n",
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
formatter.write("2021-10-05 21:22:42 PASS: Successfully navigated to the Home page");
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
formatter.write("2021-10-05 21:22:44 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "Passing \"User1@example.co\" and \"111111\" to Sign In window",
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
  "name": "Verifying that I Signed In as a \"User1@example.co\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:22:52 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"User1@example.co\" user(file:src/main/resources/features/login.feature:61)\r\n",
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
formatter.write("2021-10-05 21:22:57 PASS: Successfully navigated to the Home page");
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
formatter.write("2021-10-05 21:22:58 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "Passing \"User3@example.com\" and \"11!1111\" to Sign In window",
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
  "name": "Verifying that I Signed In as a \"User3@example.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:23:06 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"User3@example.com\" user(file:src/main/resources/features/login.feature:61)\r\n",
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
formatter.write("2021-10-05 21:23:11 PASS: Successfully navigated to the Home page");
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
formatter.write("2021-10-05 21:23:13 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "Passing \"User@example.com\" and \"111111\" to Sign In window",
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
  "name": "Verifying that I Signed In as a \"User@example.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:23:21 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"User@example.com\" user(file:src/main/resources/features/login.feature:61)\r\n",
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
formatter.write("2021-10-05 21:23:26 PASS: Successfully navigated to the Home page");
formatter.embedding("image/png", "embedded8.png", null);
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
formatter.write("2021-10-05 21:23:28 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "Passing \"m.korostyl@gmail.com.com\" and \"qwerty\" to Sign In window",
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
  "name": "Verifying that I Signed In as a \"m.korostyl@gmail.com.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:23:36 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"m.korostyl@gmail.com.com\" user(file:src/main/resources/features/login.feature:61)\r\n",
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
formatter.write("2021-10-05 21:23:41 PASS: Successfully navigated to the Home page");
formatter.embedding("image/png", "embedded10.png", null);
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
formatter.write("2021-10-05 21:23:42 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "Passing \"m.korostyl@gmail.com.com\" and \"QWERTY\" to Sign In window",
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
  "name": "Verifying that I Signed In as a \"m.korostyl@gmail.com.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded11.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:23:50 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"m.korostyl@gmail.com.com\" user(file:src/main/resources/features/login.feature:61)\r\n",
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
formatter.write("2021-10-05 21:23:55 PASS: Successfully navigated to the Home page");
formatter.embedding("image/png", "embedded12.png", null);
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
formatter.write("2021-10-05 21:23:57 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "Passing \"m.korostyl@gmail.com.com\" and \"qw erty\" to Sign In window",
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
  "name": "Verifying that I Signed In as a \"m.korostyl@gmail.com.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded13.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:24:05 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"m.korostyl@gmail.com.com\" user(file:src/main/resources/features/login.feature:61)\r\n",
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
formatter.write("2021-10-05 21:24:10 PASS: Successfully navigated to the Home page");
formatter.embedding("image/png", "embedded14.png", null);
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
formatter.write("2021-10-05 21:24:11 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "Passing \"x0535260174.@gmail.com\" and \"53526\" to Sign In window",
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
  "name": "Verifying that I Signed In as a \"x0535260174.@gmail.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded15.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:24:19 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"x0535260174.@gmail.com\" user(file:src/main/resources/features/login.feature:61)\r\n",
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
formatter.write("2021-10-05 21:24:24 PASS: Successfully navigated to the Home page");
formatter.embedding("image/png", "embedded16.png", null);
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
formatter.write("2021-10-05 21:24:25 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "Passing \".x0535260174@gmail.com\" and \"53526\" to Sign In window",
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
  "name": "Verifying that I Signed In as a \".x0535260174@gmail.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded17.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:24:33 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \".x0535260174@gmail.com\" user(file:src/main/resources/features/login.feature:61)\r\n",
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
formatter.write("2021-10-05 21:24:38 PASS: Successfully navigated to the Home page");
formatter.embedding("image/png", "embedded18.png", null);
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
formatter.write("2021-10-05 21:24:40 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "Passing \"babaieva.vafa@gmail.com\" and \"123456.\" to Sign In window",
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
  "name": "Verifying that I Signed In as a \"babaieva.vafa@gmail.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded19.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:24:48 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"babaieva.vafa@gmail.com\" user(file:src/main/resources/features/login.feature:61)\r\n",
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
formatter.write("2021-10-05 21:24:53 PASS: Successfully navigated to the Home page");
formatter.embedding("image/png", "embedded20.png", null);
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
formatter.write("2021-10-05 21:24:54 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "Passing \"babaieva.vaf_a@gmail.com\" and \"-23456\" to Sign In window",
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
  "name": "Verifying that I Signed In as a \"babaieva.vaf_a@gmail.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded21.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:25:02 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"babaieva.vaf_a@gmail.com\" user(file:src/main/resources/features/login.feature:61)\r\n",
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
formatter.write("2021-10-05 21:25:07 PASS: Successfully navigated to the Home page");
formatter.embedding("image/png", "embedded22.png", null);
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
formatter.write("2021-10-05 21:25:09 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "Passing \"tatjana.lukasova@gmail.comtatjana.lukasova@gmail.com\" and \"777777\" to Sign In window",
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
  "name": "Verifying that I Signed In as a \"tatjana.lukasova@gmail.comtatjana.lukasova@gmail.com\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded23.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:25:17 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"tatjana.lukasova@gmail.comtatjana.lukasova@gmail.com\" user(file:src/main/resources/features/login.feature:61)\r\n",
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
formatter.write("2021-10-05 21:25:22 PASS: Successfully navigated to the Home page");
formatter.embedding("image/png", "embedded24.png", null);
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
formatter.write("2021-10-05 21:25:23 PASS: Successfully navigated to Sign in page");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@outline"
    }
  ]
});
formatter.step({
  "name": "Passing \"tatjana.lukasova@gmail.clm\" and \"777777\" to Sign In window",
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
  "name": "Verifying that I Signed In as a \"tatjana.lukasova@gmail.clm\" user",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyingThatISignedInAsAUser(String)"
});
formatter.embedding("image/png", "embedded25.png", null);
formatter.result({
  "error_message": "java.lang.AssertionError: 2021-10-05 21:25:31 FAIL: Sign In hase failed\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat utils.CucumberLogUtils.logFail(CucumberLogUtils.java:39)\r\n\tat impls.LoginImpls.verifyingUserNamePage(LoginImpls.java:77)\r\n\tat steps.LoginSteps.verifyingThatISignedInAsAUser(LoginSteps.java:47)\r\n\tat ✽.Verifying that I Signed In as a \"tatjana.lukasova@gmail.clm\" user(file:src/main/resources/features/login.feature:61)\r\n",
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