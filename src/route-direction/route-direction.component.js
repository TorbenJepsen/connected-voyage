import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { addSelectedDirectionToPathAction, getRouteDirectionAction } from './route-direction.actions'
import { routeDirectionSelector } from './route-direction.selectors'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { useStyles } from '../utils/useStyles'

export const RouteDirectionComponent = () => {
    const dispatch = useDispatch()
    const directions = useSelector(state => routeDirectionSelector(state))
    const { routeNumber } = useParams()
    const classes = useStyles()
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        dispatch(getRouteDirectionAction(routeNumber))
    }, [routeNumber])

    const handleRouteDirectionChange = event => {
        dispatch(addSelectedDirectionToPathAction(routeNumber, event.target.value))
        setInputValue(event.target.value)
    }

    const directionOptions = directions ? directions.map(direction => {
        return (
            <MenuItem key={direction.direction_id} value={direction.direction_id}>
                {direction.direction_name}
            </MenuItem>
        )
    }) : null

    return (
        directions ? (
            <div className="route-selector">
                <FormControl className={classes.formControl}>
                    <InputLabel>Select Direction</InputLabel>
                    <Select
                        data-cy={"direction-selector"}
                        onChange={handleRouteDirectionChange}
                        value={inputValue}
                    >
                        {directionOptions}
                    </Select>
                </FormControl>
            </div>
        ) : null
    )
}