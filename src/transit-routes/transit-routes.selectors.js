import { createSelector } from "reselect"
import { ROUTE_NUMBER_REDUCER, TRANSIT_ROUTES_REDUCER } from "./transit-routes.types"

const transitRoutesReducer = state => state[ TRANSIT_ROUTES_REDUCER ]
const routeNumberReducer= state => state[ ROUTE_NUMBER_REDUCER ]

export const transitRoutesSelector = createSelector(
    transitRoutesReducer,
    route => route
)

export const routeNumberSelector = createSelector(
    routeNumberReducer,
    ({ routeNumber }) => routeNumber
)