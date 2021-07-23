import {
	forkJoin,
	of,
} from "rxjs"
import { ofType } from "redux-observable"
import {
	map,
	mergeMap,
    tap,
} from "rxjs/operators"
import { ROUTE_DIRECTION_FETCH } from "./route-direction.types"
import { setRouteDirectionAction } from "./route-direction.actions"

export const fetchRouteDirectionEpic = (action$, state$, { getJSON }) =>
	action$.pipe(
		ofType(ROUTE_DIRECTION_FETCH),
		mergeMap(action => getJSON(`/Directions/${action.payload}?format=json`)),
        map(setRouteDirectionAction)
	)