import React from "react"
import {
	Route
} from "react-router"
import { ConnectedVoyageComponent } from "../connected-voyage/connectedvoyage.component"
import { RouteDirectionComponent } from "../route-direction/route-direction.component"
import { RouteStopsComponent } from "../route-stops/route-stops.component"
import { VoyageListComponent } from "../voyage-list/voyage-list.component"

export const RouterComponent = () => (
	<>
		<Route
			path={ "/" }
			component={ ConnectedVoyageComponent }
		/>
		<Route 
			path={"/:routeNumber"}
			component={ RouteDirectionComponent }
		/>
		<Route 
			path={"/:routeNumber/:selectedDirection"}
			component={ RouteStopsComponent }
		/>
		<Route 
			path={"/:routeNumber/:selectedDirection/:stopCode"}
			component={ VoyageListComponent }
		/>
	</>
)