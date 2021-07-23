import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getRouteStopsAction } from '../route-stops/route-stops.actions'
import { getRouteDirectionAction } from './route-direction.actions'
import { routeDirectionSelector } from './route-direction.selectors'
import { push } from "connected-react-router"

export const RouteDirectionComponent = () => {
    const dispatch = useDispatch()
    const directions = useSelector(state => routeDirectionSelector(state))
    const { routeNumber } = useParams()

    useEffect(() => {
        dispatch(getRouteDirectionAction(routeNumber))
    }, [routeNumber])

    const addSelectedDirectionToPathAction = direction => push(`/${routeNumber}/${direction}`)

    const handleRouteDirectionChange = event => {
        dispatch(getRouteStopsAction(event.target.value, routeNumber))
        dispatch(addSelectedDirectionToPathAction(event.target.value))
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