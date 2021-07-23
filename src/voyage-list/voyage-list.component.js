import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { voyageListSelector } from './voyage-list.selectors'

export const VoyageListComponent = () => {
    const voyages = useSelector(state => voyageListSelector(state))

    return (
        voyages ? (
        <Fragment>
            <table className="voyage-list">
                <tr>
                    <th>Route</th>
                    <th>Destination</th>
                    <th>Departs</th>
                </tr>
            {voyages.map(voyage => {
                return (
                    <tr>
                        <td>{voyage.route_short_name}</td>
                        <td>{voyage.description}</td>
                        <td>{voyage.departure_text}</td>
                    </tr>
                )
            })}
            </table>
        </Fragment>
        ): null
    )
}