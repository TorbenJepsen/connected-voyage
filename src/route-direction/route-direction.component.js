import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { addSelectedDirectionToPathAction, getRouteDirectionAction } from './route-direction.actions'
import { routeDirectionSelector } from './route-direction.selectors'

export const RouteDirectionComponent = () => {
    const dispatch = useDispatch()
    const directions = useSelector(state => routeDirectionSelector(state))
    const { routeNumber } = useParams()

    useEffect(() => {
        dispatch(getRouteDirectionAction(routeNumber))
    }, [routeNumber])

    const handleRouteDirectionChange = event => {
        dispatch(addSelectedDirectionToPathAction(routeNumber, event.target.value))
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