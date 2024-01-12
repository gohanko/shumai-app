import path from "path";
import requireModule from '../../shared/require_module';

interface IPlugin {
    name: string,
    packageName: string,
    isRelative?: boolean,
    instance?: any;
    options?: any;
}

class PluginManager {
    private pluginList: Map<string, IPlugin>;

    constructor() {
        this.pluginList = new Map();
    }

    _pluginExists(pluginName: string): boolean {
        const plugin = this.pluginList.get(pluginName);
        return Boolean(plugin);
    }

    _addPlugin(plugin: IPlugin, packageContents: any) {
        this.pluginList.set(plugin.name, packageContents)
    }
        
    registerPlugin(plugin: IPlugin) {
        if (!plugin.name || !plugin.packageName) {
            throw new Error('The plugin name and package are required.');
        }

        if (this._pluginExists(plugin.name)) {
            throw new Error(`Cannot add existing plugin ${plugin.name}`);
        }

        try {
            const packageContents = plugin.isRelative 
                ? requireModule(path.join(__dirname, plugin.packageName)) 
                : requireModule(plugin.packageName);

            this._addPlugin(plugin, packageContents);
        } catch (error) {
            throw new Error(`Cannot load plugin ${plugin.name}: ${error}`);
        }
    }

    loadPlugin<T>(name: string) {
        const plugin = this.pluginList.get(name);
        if (!plugin) {
            throw new Error(`Cannot find plugin ${name}`);
        }

        plugin.instance.default.prototype.options = plugin.options;
        return Object.create(plugin?.instance.default.prototype) as T;
    }
}

export default PluginManager;