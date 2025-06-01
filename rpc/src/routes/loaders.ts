import { listInstalledPlugins, loadDataUsingDataLoader } from '../controllers/loaders';

const loadersRoute = {
    loaders: {
        listInstalled: listInstalledPlugins,
        loadDataUsingDataLoader: loadDataUsingDataLoader,
    }
}

export default loadersRoute;