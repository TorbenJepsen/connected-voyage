import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRouteNumberToPathAction } from './transit-routes.actions'
import { transitRoutesSelector } from './transit-routes.selectors'

export const TransitRoutesComponent = () => {
    const dispatch = useDispatch()
    const routes = useSelector(state => transitRoutesSelector(state))
    
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
        routes ? (
        <Fragment>
            <select className="route-selector" onChange={handleRouteChange}>
                <option>Select Route</option>
                {routeOptions}
            </select>
        </Fragment>
        ) : null
    )
}