import {
	objectReducer,
	listReducer,
	stringReducer,
} from "@wecreatesoftware/redux-higher-order-reducers"
import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import { history } from "./history"
import { ROUTE_NUMBER_INITIAL_STATE, ROUTE_NUMBER_REDUCER, TRANSIT_ROUTES_INITIAL_STATE, TRANSIT_ROUTES_REDUCER } from "./transit-routes/transit-routes.types"
import { ROUTE_DIRECTION_INITIAL_STATE, ROUTE_DIRECTION_REDUCER, SELECTED_DIRECTION_INITIAL_STATE, SELECTED_DIRECTION_REDUCER } from "./route-direction/route-direction.types"
import { ROUTE_STOPS_INITIAL_STATE, ROUTE_STOPS_REDUCER, ROUTE_STOP_ID_INITIAL_STATE, ROUTE_STOP_ID_REDUCER } from "./route-stops/route-stops.types"
import { VOYAGE_LIST_INITIAL_STATE, VOYAGE_LIST_REDUCER } from "./voyage-list/voyage-list.types"

export const reducers = combineReducers({
	router: connectRouter(history),
    [ TRANSIT_ROUTES_REDUCER ]: listReducer({
        reducerName: TRANSIT_ROUTES_REDUCER,
        initialState: TRANSIT_ROUTES_INITIAL_STATE
    }),
    [ ROUTE_DIRECTION_REDUCER ]: listReducer({
        reducerName: ROUTE_DIRECTION_REDUCER,
        initialState: ROUTE_DIRECTION_INITIAL_STATE
    }),
    [ ROUTE_NUMBER_REDUCER ]: objectReducer({
        reducerName: ROUTE_NUMBER_REDUCER,
        initialState: ROUTE_NUMBER_INITIAL_STATE
    }),
    [ ROUTE_STOPS_REDUCER ]: listReducer({
        reducerName: ROUTE_STOPS_REDUCER,
        initialState: ROUTE_STOPS_INITIAL_STATE
    }),
    [ SELECTED_DIRECTION_REDUCER ]: objectReducer({
        reducerName: SELECTED_DIRECTION_REDUCER,
        initialState: SELECTED_DIRECTION_INITIAL_STATE
    }),
    [ VOYAGE_LIST_REDUCER ]: listReducer({
        reducerName: VOYAGE_LIST_REDUCER,
        initialState: VOYAGE_LIST_INITIAL_STATE
    }),
})