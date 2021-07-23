import { createSelector } from "reselect"
import { ROUTE_STOPS_REDUCER } from "./route-stops.types"

const routeStopsReducer = state => state[ ROUTE_STOPS_REDUCER ]

export const routeStopsSelector = createSelector(
    routeStopsReducer,
    stops => stops
)
