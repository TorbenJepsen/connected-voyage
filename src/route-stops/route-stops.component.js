import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { routeStopsSelector } from './route-stops.selectors'
import { addSelectedStopCodeToPathAction, getRouteStopsAction } from './route-stops.actions'

export const RouteStopsComponent = () => {
    const dispatch = useDispatch()
    const routeStops = useSelector(state => routeStopsSelector(state))
    const { routeNumber, selectedDirection } = useParams()

    useEffect(() => {
        dispatch(getRouteStopsAction(selectedDirection, routeNumber))
    }, [selectedDirection])

    const handleRouteStopChange = event => {
        dispatch(addSelectedStopCodeToPathAction(routeNumber, selectedDirection, event.target.value))
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
            <select
                className="route-stop-selector"
                data-cy={ "stop-selector" }
                onChange={handleRouteStopChange}
            >
                <option>Select Stop</option>
                {stopOptions}
            </select>
        </Fragment>
        ) : null
    )
}