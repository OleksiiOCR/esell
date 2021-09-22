Feature: Testing login
  Background:
    Given I am navigating to the home page
    And Clicking SingIn button


    @User1@example.com @login @user1 @positive
Scenario: Testing User1@example.com
     Then Passing "User1@example.com" to  "Email" field
      And Passing  "111111" to the "Password" field
