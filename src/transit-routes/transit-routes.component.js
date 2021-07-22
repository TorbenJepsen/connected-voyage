import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRouteDirectionAction } from '../route-direction/route-direction.actions'
import { transitRoutesSelector } from './transit-routes.selectors'

export const TransitRoutesComponent = () => {
    const dispatch = useDispatch()
    const routes = useSelector(state => transitRoutesSelector(state))

    const handleRouteChange = event => dispatch(getRouteDirectionAction(event.target.value))

    const routeOptions = routes.map(route => {
        return (
            <option key={route.Route} value={route.Route}>
                {route.Description}
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