import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouteDirectionComponent } from '../route-direction/route-direction.component'
import { RouteStopsComponent } from '../route-stops/route-stops.component'
import { fetchTransitRoutesAction } from '../transit-routes/transit-routes.actions'
import { TransitRoutesComponent } from '../transit-routes/transit-routes.component'

export const ConnectedVoyageComponent = () => {
    const headline = "Departures"
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTransitRoutesAction())
    }, [])

    return (
        <div>
            {headline}
            <TransitRoutesComponent />
            <RouteDirectionComponent />
            <RouteStopsComponent />
        </div>
    )
}