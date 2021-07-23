import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedDirectionSelector } from '../route-direction/route-direction.selectors'
import { routeNumberSelector } from '../transit-routes/transit-routes.selectors'
import { fetchVoyageDeparturesAction } from '../voyage-list/voyage-list.actions'
import { routeStopsSelector } from './route-stops.selectors'

export const RouteStopsComponent = () => {
    const dispatch = useDispatch()
    const routeStops = useSelector(state => routeStopsSelector(state))
    const routeNumber = useSelector(state => routeNumberSelector(state))
    const selectedDirection = useSelector(state => selectedDirectionSelector(state))

    const handleRouteStopChange = event => dispatch(fetchVoyageDeparturesAction(routeNumber, selectedDirection, event.target.value))

    const stopOptions = routeStops ? routeStops.map(stop => {
        return (
            <option key={stop.place_code} value={stop.place_code}>
                {stop.description}
            </option>
        )
    }) : null

    return (
        routeStops ? (
            <Fragment>
            <select className="route-stop-selector" onChange={handleRouteStopChange}>
                <option>Select Stop</option>
                {stopOptions}
            </select>
        </Fragment>
        ) : null
    )
}