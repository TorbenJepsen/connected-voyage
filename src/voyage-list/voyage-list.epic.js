import { ofType } from "redux-observable"
import {
	map,
	mergeMap,
} from "rxjs/operators"
import { setVoyageListAction } from "./voyage-list.actions"
import { VOYAGE_OBJECT_FETCH } from "./voyage-list.types"

export const fetchVoyageDeparturesEpic = (action$, state$, { getJSON }) =>
	action$.pipe(
		ofType(VOYAGE_OBJECT_FETCH),
		mergeMap(action => getJSON(`/${action.payload.routeNumber}/${action.payload.direction}/${action.payload.stopValue}?format=json`)),
        map(({ departures, stops }) => {
			return ({ departures, stops})
		}),
        map(setVoyageListAction)
	)
