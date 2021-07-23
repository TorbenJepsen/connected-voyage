import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchVoyageDeparturesAction } from './voyage-list.actions'
import { voyageDeparturesSelector, voyageStopDescriptionSelector, voyageStopIdSelector } from './voyage-list.selectors'

export const VoyageListComponent = () => {
    const { routeNumber, selectedDirection, stopCode } = useParams()
    const dispatch = useDispatch()
    const departures = useSelector(state => voyageDeparturesSelector(state))
    const stopDescription = useSelector(state => voyageStopDescriptionSelector(state))
    const stopId = useSelector(state => voyageStopIdSelector(state))

    useEffect(() => {
        dispatch(fetchVoyageDeparturesAction(routeNumber, selectedDirection, stopCode))
    }, [stopCode, routeNumber])


    return (
        departures ? (
            <Fragment>
                <span>
                    <h3>{stopDescription} Stop #:{stopId}</h3>
                </span>
                <table className="voyage-list" data-cy={"voyage-list"}>
                    <thead>
                        <tr>
                            <th>Route</th>
                            <th>Destination</th>
                            <th>Departs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departures.map(departure => {
                            return (
                                <tr key={departure.trip_id}>
                                    <td>{departure.route_short_name}</td>
                                    <td>{departure.description}</td>
                                    <td>{departure.departure_text}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Fragment>
        ) : null
    )
}