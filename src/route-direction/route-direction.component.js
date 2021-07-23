import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRouteStopsAction } from '../route-stops/route-stops.actions'
import { routeNumberSelector } from '../transit-routes/transit-routes.selectors'
import { setSelectedDirectionAction } from './route-direction.actions'
import { routeDirectionSelector } from './route-direction.selectors'

export const RouteDirectionComponent = () => {
    const dispatch = useDispatch()
    const directions = useSelector(state => routeDirectionSelector(state))
    const routeNumber = useSelector(state => routeNumberSelector(state))

    const handleRouteDirectionChange = event => {
        dispatch(getRouteStopsAction(event.target.value, routeNumber))
        dispatch(setSelectedDirectionAction(event.target.value))
    }

    const directionOptions = directions ? directions.map(direction => {
        return (
            <option key={direction.direction_id} value={direction.direction_id}>
                {direction.direction_name}
            </option>
        )
    }) : null

    return (
        directions ? (
            <Fragment>
            <select className="route-direction-selector" onChange={handleRouteDirectionChange}>
                <option>Select Direction</option>
                {directionOptions}
            </select>
        </Fragment>
        ) : null
    )
}