import collapse from '../shared/collapse'
import loadersRoute from "./loaders"

const combinedRoute = {
    ...loadersRoute
}

const rootRoute = Object.keys(combinedRoute).reduce(collapse('', '.', combinedRoute), {});

export default rootRoute;