import { createSelector } from "reselect"
import { VOYAGE_OBJECT_REDUCER } from "./voyage-list.types"

const voyageObjectReducer = state => state[ VOYAGE_OBJECT_REDUCER ]

export const voyageDeparturesSelector = createSelector(
    voyageObjectReducer,
    ({ departures }) => departures
)

const stopsSelector = createSelector(
    voyageObjectReducer,
    ({stops}) => stops
)

const firstStopSelector = createSelector(
    stopsSelector,
    stops => {
        if (!stops || !stops.length) {
            return undefined
        }
        return stops[0]
    }
)

export const voyageStopDescriptionSelector = createSelector(
    firstStopSelector,
    ({description} = {}) => description
)

export const voyageStopIdSelector = createSelector(
    firstStopSelector,
    ({ stop_id } ={}) => stop_id
)