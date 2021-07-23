import {
	Given,
	Then,
	When,
} from "cypress-cucumber-preprocessor/steps"

Given(/^user loads page$/, () => (
	cy
		.intercept("/Routes?format=json", { fixture: "routes" })
		.as("getAllRoutes")
		.visit("/")
		.wait("@getAllRoutes")
))

When(/^the user selects route$/, () => (
	cy
        .getRouteSelector()
		.select('901')
))

When(/^the user selects direction$/, () => (
	cy
        .getDirectionSelector()
		.select('0')
))

When(/^the user selects a stop$/, () => (
	cy
        .getStopSelector()
		.select('MAAM')
))

Then(/^the url should contain (.*)$/, path => (
	cy
		.url()
		.should("contain", `/${path}`)
))

Then(/^the (.*) should exist$/, component => {
    let selector
    selector = `[data-cy=${component}]`

	cy
		.get(selector)
        .should("be.visible")
}
)