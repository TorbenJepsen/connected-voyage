import { ofType } from "redux-observable"
import {
	map,
	mergeMap,
} from "rxjs/operators"
import { TRANSIT_ROUTES_FETCH } from "./transit-routes.types"
import { setTransitRoutesAction } from "./transit-routes.actions"

export const fetchTransitRoutesEpic = (action$, state$, { getJSON }) =>
	action$.pipe(
		ofType(TRANSIT_ROUTES_FETCH),
		mergeMap(action => getJSON(`/Routes?format=json`)),
        map(setTransitRoutesAction)
	)