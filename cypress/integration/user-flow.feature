Feature: user flow

  Scenario: user can view transit routes
    Given user loads page
    And the route-selector should exist
    When the user selects route
    And the url should contain 901
    And the direction-selector should exist
    When the user selects direction
    And the url should contain 901/0
    And the stop-selector should exist
    When the user selects a stop
    And the url should contain 901/0/MAAM
    And the voyage-list should exist



