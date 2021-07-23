Cypress.Commands.add("getRouteSelector", () => (
	cy.get("[data-cy=route-selector]")
))
Cypress.Commands.add("getDirectionSelector", () => (
	cy.get("[data-cy=direction-selector]")
))
Cypress.Commands.add("getStopSelector", () => (
	cy.get("[data-cy=stop-selector]")
))
Cypress.Commands.add("getVoyageList", () => (
	cy.get("[data-cy=voyage-list]")
))