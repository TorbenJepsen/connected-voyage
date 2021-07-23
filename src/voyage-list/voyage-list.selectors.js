import { createSelector } from "reselect"
import { VOYAGE_LIST_REDUCER } from "./voyage-list.types"

const voyageListReducer = state => state[ VOYAGE_LIST_REDUCER ]

export const voyageListSelector = createSelector(
    voyageListReducer,
    voyages => voyages
)
