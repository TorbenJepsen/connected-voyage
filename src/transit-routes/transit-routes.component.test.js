import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

import { createStore, applyMiddleware } from 'redux';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { TransitRoutesComponent } from './transit-routes.component'
import { TRANSIT_ROUTES_REDUCER } from './transit-routes.types'

const mockRoute = [
    {
        Description: 'METRO Green Line',
        ProviderID: '8',
        Route: '902'
    }
];

const store = configureStore({ [ TRANSIT_ROUTES_REDUCER ]: mockRoute })

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={store}>
            <TransitRoutesComponent />
        </Provider>, div);
});

it('renders routes correctly', () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <TransitRoutesComponent />
        </Provider>);
    expect(getByTestId('route-selector')).toHaveTextContent('METRO Green Line');
});

it('matches snapshot', () => {
    const tree = renderer.create(
        <Provider store={store}>
            <TransitRoutesComponent />
        </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});
