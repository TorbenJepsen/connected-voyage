import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import { RouterComponent } from "./router/router.component"
import { store } from "./store"
import packageJson from "../package.json"
import { history } from "./history"

const markup = (
	<Provider store={ store() }>
		<ConnectedRouter history={ history }>
			<RouterComponent />
		</ConnectedRouter>
	</Provider>
)

render(
	markup,
	document.getElementById(packageJson.name),
	() => window.initialized = true
)