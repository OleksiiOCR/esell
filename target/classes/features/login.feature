Feature: Testing login
  Background:
    Given I am navigating to the home page
    And Clicking CRM SingIn button


    @User1@example.com @login @user1 @positive
Scenario: Testing User1@example.com
     Then Passing "User1@example.com" to  "Email" field
      And Passing  "111111" to the "Password" field
      Then Clicking "Sign In" button
      And Verifying that I Signed In as a "User1@example.com" user
      Then Signing Out
