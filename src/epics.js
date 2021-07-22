import { combineEpics } from "redux-observable"
import { fetchRouteDirectionEpic } from "./route-direction/route-direction.epic"
import { fetchTransitRoutesEpic } from "./transit-routes/transit-routes.epic"

export const epics = combineEpics(
    fetchRouteDirectionEpic,
    fetchTransitRoutesEpic,
)