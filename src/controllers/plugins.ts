import DataLoaderPlugin from '../plugins/contract';
import PluginManager from "../plugins/plugin_manager";
import { pluginList } from "../configs";

const pluginManager = new PluginManager();
pluginList.map((plugin) => pluginManager.registerPlugin(plugin))

const listInstalledPlugins = (args, done) => {
    const pluginList = pluginManager.getPluginList()
    done(null, JSON.parse(pluginList))
}

const loadDataUsingDataLoader = (args, done) => {
    try {
        const packageName = args?.packageName;
        const dataLoader: DataLoaderPlugin = pluginManager.loadPlugin(packageName)
        const data = dataLoader.load(args.uri)
        done(null, data)
    } catch (error) {
        const errorResponse = {
            code: 404,
            message: error.message
        }

        done(errorResponse)
    }
}

export {
    listInstalledPlugins,
    loadDataUsingDataLoader
}