import { setListAction } from "@wecreatesoftware/redux-higher-order-reducers"
import { TRANSIT_ROUTES_FETCH, TRANSIT_ROUTES_REDUCER } from "./transit-routes.types"
import { push } from "connected-react-router"

export const setTransitRoutesAction = routes => {
    return (setListAction({
        reducerName: TRANSIT_ROUTES_REDUCER,
        payload: routes,
    })
)
}

export const fetchTransitRoutesAction = () => ({
    type: TRANSIT_ROUTES_FETCH,
})

export const addRouteNumberToPathAction = routeNumber => push(`/${routeNumber}`)