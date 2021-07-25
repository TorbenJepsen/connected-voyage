import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTransitRoutesAction } from '../transit-routes/transit-routes.actions'
import { TransitRoutesComponent } from '../transit-routes/transit-routes.component'
import './connected-voyage.css'

export const ConnectedVoyageComponent = () => {
    const headline = "Departures"
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTransitRoutesAction())
    }, [])

    return (
        <div className="app-container">
            {headline}
            <TransitRoutesComponent />
        </div>
    )
}