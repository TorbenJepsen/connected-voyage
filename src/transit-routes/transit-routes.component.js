import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { transitRoutesSelector } from './transit-routes.selectors'
import { push } from "connected-react-router"

export const TransitRoutesComponent = () => {
    const dispatch = useDispatch()
    const routes = useSelector(state => transitRoutesSelector(state))
    
    const addRouteNumberToPathAction = routeNumber => push(`/${routeNumber}`)

    const setRouteAndGetDirection = routeNumber => {
        dispatch(addRouteNumberToPathAction(routeNumber))
    }

    const handleRouteChange = event => setRouteAndGetDirection(event.target.value)

    const routeOptions = routes.map(route => {
        return (
            <option key={route.route_id} value={route.route_id}>
                {route.route_label}
            </option>
        )
    })

    return (
        <div>
            <select className="route-selector" onChange={handleRouteChange}>
                <option>Select Route</option>
                {routeOptions}
            </select>
        </div>
    )
}