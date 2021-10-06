Feature: testing login

  Background:
    Given I am navigating to the home page
    And Clicking CRM SingIn button


  @User1@example.com @login @user1 @positive
  Scenario: Testing User1@example.com credentials
    Then Passing "User1@example.com" to  "Email" field
    And Passing  "111111" to the "Password" field
    Then Clicking "Sign In" button
    And Verifying that I Signed In as a "User1@example.com" user
    Then Signing Out

  @login @user3 @positive @regression
  Scenario: Testing User3@example.com credentials
    Then Passing "User3@example.com" to  "Email" field
    And Passing  "111111" to the "Password" field
    Then Clicking "Sign In" button
    And Verifying that I Signed In as a "User3@example.com" user
    Then Signing Out

  @login @m.korostyl@gmail.com @positive @regression @smoke
  Scenario: Testing m.korostyl@gmail.com credentials
    Then Passing "m.korostyl@gmail.com" to  "Email" field
    And Passing  "qwerty" to the "Password" field
    Then Clicking "Sign In" button
    And Verifying that I Signed In as a "m.korostyl@gmail.com" user
    Then Signing Out


  @login @x0535260174@gmail.com @positive
  Scenario: Testing x0535260174@gmail.com credentials
    Then Passing "x0535260174@gmail.com" to  "Email" field
    And Passing  "53526" to the "Password" field
    Then Clicking "Sign In" button
    And Verifying that I Signed In as a "x0535260174@gmail.com" user
    Then Signing Out

  @login @babaieva.vafa@gmail.com @positive
  Scenario: Testing babaieva.vafa@gmail.com credentials
    Then Passing "babaieva.vafa@gmail.com" to  "Email" field
    And Passing  "123456" to the "Password" field
    Then Clicking "Sign In" button
    And Verifying that I Signed In as a "babaieva.vafa@gmail.com" user
    Then Signing Out

  @login @tatjana.lukasova@gmail.com @positive
  Scenario: Testing tatjana.lukasova@gmail.com credentials
    Then Passing "tatjana.lukasova@gmail.com" to  "Email" field
    And Passing  "777777" to the "Password" field
    Then Clicking "Sign In" button
    And Verifying that I Signed In as a "tatjana.lukasova@gmail.com" user
    Then Signing Out

  @login @negative @outline
  Scenario Outline:
    Then Passing "<Email>" and "<Password>" to Sign In window
    Then Clicking "Sign In" button
    And Verifying that I Signed In as a "<Email>" user
    Then Signing Out
    Examples:
      | Email                                                | Password |
      | User1@example.com                                    | 111 111  |
      | User1@example.co                                     | 111111   |
      | User3@example.com                                    | 11!1111  |
      | User@example.com                                     | 111111   |
      | m.korostyl@gmail.com.com                             | qwerty   |
      | m.korostyl@gmail.com.com                             | QWERTY   |
      | m.korostyl@gmail.com.com                             | qw erty  |
      | x0535260174.@gmail.com                               | 53526    |
      | .x0535260174@gmail.com                               | 53526    |
      | babaieva.vafa@gmail.com                              | 123456.  |
      | babaieva.vaf_a@gmail.com                             | -23456   |
      | tatjana.lukasova@gmail.comtatjana.lukasova@gmail.com | 777777   |
      | tatjana.lukasova@gmail.clm                           | 777777   |