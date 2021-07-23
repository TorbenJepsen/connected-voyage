import { combineEpics } from "redux-observable"
import { fetchRouteDirectionEpic } from "./route-direction/route-direction.epic"
import { fetchRouteStopsEpic } from "./route-stops/route-stops.epic"
import { fetchTransitRoutesEpic } from "./transit-routes/transit-routes.epic"
import { fetchVoyageDeparturesEpic } from "./voyage-list/voyage-list.epic"

export const epics = combineEpics(
    fetchRouteDirectionEpic,
    fetchRouteStopsEpic,
    fetchTransitRoutesEpic,
    fetchVoyageDeparturesEpic,
)