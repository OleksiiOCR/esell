Feature: testing warehouse employees

  Background:
    Given I am navigating to the home page
    And Clicking CRM SingIn button
#packer
  @employeesLogin @employees @warehouse @positive @packer@example.com @regression
  Scenario: Testing packer@example.com employee login
    Then Passing "packer@example.com" to  "Email" field
    And Passing  "packer" to the "Password" field
    Then Clicking "Sign In" button
    And Verifying that I Signed In as a "packer@example.com" user
    Then Signing Out
 #picker1
  @employeesLogin @employees @warehouse @positive @picker@example.com @regression
  Scenario: Testing picker@example.com employee login
    Then Passing "picker@example.com" to  "Email" field
    And Passing  "picker" to the "Password" field
    Then Clicking "Sign In" button
    And Verifying that I Signed In as a "picker@example.com" user
    Then Signing Out
  #picker2
  @employeesLogin @employees @warehouse @positive @picker2@example.com
  Scenario: Testing picker2@example.com employee login
    Then Passing "picker2@example.com" to  "Email" field
    And Passing  "picker" to the "Password" field
    Then Clicking "Sign In" button
    And Verifying that I Signed In as a "picker2@example.com" user
    Then Signing Out
 #checker
  @employeesLogin @employees @warehouse @positive @checker@example.com @regression
  Scenario: Testing checker@example.com employee login
    Then Passing "checker@example.com" to  "Email" field
    And Passing  "checker" to the "Password" field
    Then Clicking "Sign In" button
    And Verifying that I Signed In as a "checker@example.com" user

  @employees @negative @warehouse
  Scenario Outline:
    Then Passing "<Email>" and "<Password>" to Sign In window
    Then Clicking "Sign In" button
    And Verifying that I Signed In as a "<Email>" user
    Then Signing Out
    Examples:
      | Email               | Password |
      | packer1@example.com | paker    |
      | picker@example.com  | paker    |
      | picker2@example.com | ----     |
      | checker@example.com | picker   |


