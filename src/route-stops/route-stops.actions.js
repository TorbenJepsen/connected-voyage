import { setListAction } from "@wecreatesoftware/redux-higher-order-reducers"
import { ROUTE_STOPS_FETCH, ROUTE_STOPS_REDUCER } from "./route-stops.types"

export const setRouteStopsAction = stops => {
    return (setListAction({
        reducerName: ROUTE_STOPS_REDUCER,
        payload: stops,
    })
)
}

export const getRouteStopsAction = (direction, routeNumber) => {
    console.log(direction, routeNumber)
    return ({
    type: ROUTE_STOPS_FETCH,
    payload: { direction, routeNumber }
})
}
