import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { fetchVoyageDeparturesAction } from './voyage-list.actions'
import { voyageDeparturesSelector, voyageStopDescriptionSelector, voyageStopIdSelector } from './voyage-list.selectors'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from '../utils/useStyles'
import { StyledTableCell } from '../utils/withStyles'
import { StyledTableRow } from '../utils/withStyles'

export const VoyageListComponent = () => {
    const { routeNumber, selectedDirection, stopCode } = useParams()
    const dispatch = useDispatch()
    const departures = useSelector(state => voyageDeparturesSelector(state))
    const stopDescription = useSelector(state => voyageStopDescriptionSelector(state))
    const stopId = useSelector(state => voyageStopIdSelector(state))
    const classes = useStyles()

    useEffect(() => {
        dispatch(fetchVoyageDeparturesAction(routeNumber, selectedDirection, stopCode))
    }, [stopCode, routeNumber])

    const rows = departures ? departures.map(departure => {
        return (
            {
                route: departure.route_short_name,
                destination: departure.description,
                departs: departure.departure_text,
                tripId: departure.trip_id
            }
        )
    }) : undefined
    console.log(rows)
    return (
        departures ? (
            <Fragment>
                <span>
                    <h3>{stopDescription} Stop #:{stopId}</h3>
                </span>
                <TableContainer component={Paper} data-cy={"voyage-list"}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Route</StyledTableCell>
                                <StyledTableCell>Destination</StyledTableCell>
                                <StyledTableCell>Departs</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.tripId}>
                                    <StyledTableCell>{row.route}</StyledTableCell>
                                    <StyledTableCell >
                                        {row.destination}
                                        </StyledTableCell>
                                    <StyledTableCell>{row.departs}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Fragment>
        ) : null
    )
}