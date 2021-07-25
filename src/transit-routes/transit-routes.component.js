import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRouteNumberToPathAction } from './transit-routes.actions'
import { transitRoutesSelector } from './transit-routes.selectors'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { useStyles } from '../utils/useStyles';

export const TransitRoutesComponent = () => {
    const dispatch = useDispatch()
    const routes = useSelector(state => transitRoutesSelector(state))
    const classes = useStyles()
    const [inputValue, setInputValue] = useState('')

    const setRouteAndGetDirection = routeNumber => {
        dispatch(addRouteNumberToPathAction(routeNumber))
    }

    const handleRouteChange = event => {
        setRouteAndGetDirection(event.target.value)
        setInputValue(event.target.value)
    }

    const routeOptions = routes.map(route => {
        return (
            <MenuItem key={route.route_id} value={route.route_id}>
                {route.route_label}
            </MenuItem>
        )
    })

    return (
        routes ? (
            <div className="route-selector">
                <FormControl className={classes.formControl}>
                    <InputLabel>Select Route</InputLabel>
                    <Select
                        data-cy={"route-selector"}
                        onChange={handleRouteChange}
                        value={inputValue}
                    >
                        {routeOptions}
                    </Select>
                </FormControl>
            </div>
        ) : null
    )
}