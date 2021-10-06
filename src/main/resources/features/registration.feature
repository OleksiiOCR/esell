Feature: Testing registration page

  Background:
    Given I am navigating to the home page
    And Clicking CRM SingIn button
    Then Clicking "Register" option

  @registration @positive @outline
Scenario Outline:
  Then I am registering with following "<users>" and "<passwords>"
    Then Clicking "Create Account" button
    And Verifying that I Signed In as a "<users>" user
    Then Signing Out
    Examples:
      | users             | passwords |
      | oleksi1@yahoo.com | 123       |
      | spartan1@gmail.com | wwww      |
      | hello1@org.com     | 0000      |

  @registration @negative @outline
  Scenario Outline:
    Then I am registering with following "<users>" and "<passwords>"
    Then Clicking "Create Account" button
    And Verifying that I Signed In as a "<users>" user
    Then Signing Out
    Examples:
      | users             | passwords |
      | @@oleksi1yahoo.com | 123       |
      | spar.tan@gmail | wwww      |
      | 2hello1@org.com     | $@@$%     |
      | kskdv3374%%!@@oleksi1yahoo.com | 123       |
      | spar@.ta.on@gmail.com | www@_w      |
      | hello1@org.com     |ildvvvho;WD;HWVHWVHW'sacfpibg94r3rkj;fip948r2r29ef[ce    |
    |lhdcowhvevhhvw;oVHWOVHW;;SJSFB ;FB@SOLHBJBPEWJBjvpdohjvbp.cococ|000)(         |
    |uegervooow94t74092-28r28!@#$%^&*()_+    ":?><|  jjfjffj    lskl!@#$%^&*())__++}{{|
    |00000.000.@123.99                               |oooo....ooo                     |

