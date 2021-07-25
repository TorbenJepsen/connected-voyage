import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { routeStopsSelector } from './route-stops.selectors'
import { addSelectedStopCodeToPathAction, getRouteStopsAction } from './route-stops.actions'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { useStyles } from '../utils/useStyles'

export const RouteStopsComponent = () => {
    const dispatch = useDispatch()
    const routeStops = useSelector(state => routeStopsSelector(state))
    const { routeNumber, selectedDirection } = useParams()
    const classes = useStyles()
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        dispatch(getRouteStopsAction(selectedDirection, routeNumber))
    }, [selectedDirection])

    const handleRouteStopChange = event => {
        dispatch(addSelectedStopCodeToPathAction(routeNumber, selectedDirection, event.target.value))
        setInputValue(event.target.value)
    }

    const stopOptions = routeStops ? routeStops.map(stop => {
        return (
            <MenuItem key={stop.place_code} value={stop.place_code}>
                {stop.description}
            </MenuItem>
        )
    }) : null

    return (
        routeStops ? (
            <div className="route-selector">
                <FormControl className={classes.formControl}>
                    <InputLabel>Select Stop</InputLabel>
                    <Select
                        data-cy={"stop-selector"}
                        onChange={handleRouteStopChange}
                        value={inputValue}
                    >
                        {stopOptions}
                    </Select>
                </FormControl>
            </div>
        ) : null
    )
}