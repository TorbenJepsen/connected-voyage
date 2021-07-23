import { setListAction, setObjectAction } from "@wecreatesoftware/redux-higher-order-reducers"
import { ROUTE_NUMBER_REDUCER, TRANSIT_ROUTES_FETCH, TRANSIT_ROUTES_REDUCER } from "./transit-routes.types"

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

export const setRouteNumberAction = route => {
    return (setObjectAction({
        reducerName: ROUTE_NUMBER_REDUCER,
        payload: {routeNumber: route},
    })
)
}
