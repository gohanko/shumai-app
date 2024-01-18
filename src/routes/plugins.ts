import { listInstalledPlugins, loadDataUsingDataLoader } from '../controllers/plugins';

const pluginsRoute = {
    plugins: {
        listInstalled: listInstalledPlugins,
        loadDataUsingDataLoader: loadDataUsingDataLoader,
    }
}

export default pluginsRoute;