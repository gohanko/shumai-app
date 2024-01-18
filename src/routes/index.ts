import collapse from '../shared/collapse'
import pluginsRoute from "./plugins"

const combinedRoute = {
    ...pluginsRoute
}

const rootRoute = Object.keys(combinedRoute).reduce(collapse('', '.', combinedRoute), {});

export default rootRoute;