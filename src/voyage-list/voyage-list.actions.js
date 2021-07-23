import { setListAction } from "@wecreatesoftware/redux-higher-order-reducers"
import { VOYAGE_LIST_FETCH, VOYAGE_LIST_REDUCER } from "./voyage-list.types"

export const setVoyageListAction = voyages => {
    console.log(voyages)
    return (setListAction({
        reducerName: VOYAGE_LIST_REDUCER,
        payload: voyages,
    })
)
}

export const fetchVoyageDeparturesAction = (routeNumber, direction, stopValue) => {
    console.log(direction, routeNumber, stopValue)
    return ({
    type: VOYAGE_LIST_FETCH,
    payload: { direction, routeNumber, stopValue }
})
}