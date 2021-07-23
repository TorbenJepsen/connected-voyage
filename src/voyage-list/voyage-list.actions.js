import { setObjectAction } from "@wecreatesoftware/redux-higher-order-reducers"
import { VOYAGE_OBJECT_FETCH, VOYAGE_OBJECT_REDUCER } from "./voyage-list.types"

export const setVoyageListAction = ({ departures, stops }) => {
    return (setObjectAction({
        reducerName: VOYAGE_OBJECT_REDUCER,
        payload: {
            departures,
            stops,
        }
    })
)
}

export const fetchVoyageDeparturesAction = (routeNumber, direction, stopValue) => {
    return ({
    type: VOYAGE_OBJECT_FETCH,
    payload: { direction, routeNumber, stopValue }
})
}