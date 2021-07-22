import React from "react"
import {
	Route,
	Switch,
} from "react-router"
import { ConnectedVoyageComponent } from "../connected-voyage/connectedvoyage.component"

export const RouterComponent = () => (
	<Switch>
		<Route
			exact
			path={ "/" }
			component={ ConnectedVoyageComponent }
		/>
		<Route render={ () => (<div>Oops, something went wrong! :(</div>) } />
	</Switch>
)