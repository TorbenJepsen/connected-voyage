import { setListAction } from "@wecreatesoftware/redux-higher-order-reducers"
import { ROUTE_DIRECTION_FETCH, ROUTE_DIRECTION_REDUCER } from "./route-direction.types"

export const setRouteDirectionAction = routes => {
    return (setListAction({
        reducerName: ROUTE_DIRECTION_REDUCER,
        payload: routes,
    })
)
}

export const getRouteDirectionAction = route => {
    console.log(route)
    return ({
    type: ROUTE_DIRECTION_FETCH,
    payload: route
})
}