import { ofType } from "redux-observable"
import {
	map,
	mergeMap,
    tap,
} from "rxjs/operators"
import { setVoyageListAction } from "./voyage-list.actions"
import { VOYAGE_LIST_FETCH } from "./voyage-list.types"

export const fetchVoyageDeparturesEpic = (action$, state$, { getJSON }) =>
	action$.pipe(
		ofType(VOYAGE_LIST_FETCH),
        tap(action => console.log(action)),
		mergeMap(action => getJSON(`/${action.payload.routeNumber}/${action.payload.direction}/${action.payload.stopValue}?format=json`)),
        map(({ departures }) => departures),
        map(setVoyageListAction)
	)
