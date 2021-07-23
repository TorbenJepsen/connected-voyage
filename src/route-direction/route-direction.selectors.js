import { createSelector } from "reselect"
import { ROUTE_DIRECTION_REDUCER, SELECTED_DIRECTION_REDUCER } from "./route-direction.types"

const routeDirectionReducer = state => state[ ROUTE_DIRECTION_REDUCER ]
const selectedDirectionReducer = state => state[ SELECTED_DIRECTION_REDUCER ]

export const routeDirectionSelector = createSelector(
    routeDirectionReducer,
    direction => direction
)

export const selectedDirectionSelector = createSelector(
    selectedDirectionReducer,
    ({ selectedDirection }) => selectedDirection
)