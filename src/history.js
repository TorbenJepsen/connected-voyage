import { createBrowserHistory } from "history"

const history = createBrowserHistory()

if (window.__PRELOADED_STATE__) {
	history.replace(window.__PRELOADED_STATE__.router.location)
}
export { history }