import { ajax } from "rxjs/ajax"
import {
	applyMiddleware,
	compose,
	createStore,
} from "redux"
import { createEpicMiddleware } from "redux-observable"
import { reducers } from "./reducers"
import { epics } from "./epics"
import packageJson from "../package.json"
import { routerMiddleware } from "connected-react-router"
import { history } from "./history"

const epicMiddleware = createEpicMiddleware({
	dependencies: {
		ajax,
		getJSON: ajax.getJSON,
	},
})

export const store = () => {
	const composeEnhancers =
		typeof window === "object" &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
			window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				name: packageJson.name,
			}) : compose

	const store = createStore(
		reducers,
		window.__PRELOADED_STATE__ || {},
		composeEnhancers(
			applyMiddleware(
				routerMiddleware(history),
				epicMiddleware,
			),
		),
	)

	epicMiddleware.run(epics)

	window.store = store

	return store
}
