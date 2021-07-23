import { ofType } from "redux-observable"
import {
	map,
	mergeMap,
} from "rxjs/operators"
import { ROUTE_STOPS_FETCH, ROUTE_STOP_ID_FETCH } from "./route-stops.types"
import { setRouteStopIdAction, setRouteStopsAction } from "./route-stops.actions"

export const fetchRouteStopsEpic = (action$, state$, { getJSON }) =>
	action$.pipe(
		ofType(ROUTE_STOPS_FETCH),
		mergeMap(action => getJSON(`/Stops/${action.payload.routeNumber}/${action.payload.direction}?format=json`)),
        map(setRouteStopsAction)
	)
