import { createSelector } from "reselect"
import { TRANSIT_ROUTES_REDUCER } from "./transit-routes.types"

const transitRoutesReducer = state => state[ TRANSIT_ROUTES_REDUCER ]

export const transitRoutesSelector = createSelector(
    transitRoutesReducer,
    route => route
)
