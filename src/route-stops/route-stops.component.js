import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchVoyageDeparturesAction } from '../voyage-list/voyage-list.actions'
import { routeStopsSelector } from './route-stops.selectors'
import { push } from "connected-react-router"

export const RouteStopsComponent = () => {
    const dispatch = useDispatch()
    const routeStops = useSelector(state => routeStopsSelector(state))
    const { routeNumber, selectedDirection } = useParams()

    const addSelectedStopCodeToPathAction = stopCode => push(`/${routeNumber}/${selectedDirection}/${stopCode}`)
    const handleRouteStopChange = event => {
        dispatch(addSelectedStopCodeToPathAction(event.target.value))
    }

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