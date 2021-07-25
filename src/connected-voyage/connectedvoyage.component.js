import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTransitRoutesAction } from '../transit-routes/transit-routes.actions'
import { TransitRoutesComponent } from '../transit-routes/transit-routes.component'
import './connected-voyage.css'

export const ConnectedVoyageComponent = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTransitRoutesAction())
    }, [])

    return (
        <div className="header-container">
            <img src="https://www.metrotransit.org/img/MetroTransitLogo.svg" className="metro-transit-logo" alt="metro-transit-logo" />
            <div>
                <img src="https://www.metrotransit.org/img/nextrip.jpg" className="metro-transit-banner" alt="metro-transit-banner" />
            </div>
            <TransitRoutesComponent />
        </div>
    )
}