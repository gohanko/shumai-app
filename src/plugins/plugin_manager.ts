import path from "path";
import { IPlugin } from '../types/plugin'
import requireModule from '../shared/require_module';

type PluginConfigType = {
    name: string,
    plugin: IPlugin
}

class PluginManager {
    private pluginList: Array<PluginConfigType>;

    constructor() {
        this.pluginList = [];
    }

    isPluginExists(pluginName: string): boolean {
        const plugin = this.pluginList.find(pluginConfig => pluginConfig.name == pluginName);
        return Boolean(plugin);
    }

    addPlugin(plugin: IPlugin, packageContents: any) {
        this.pluginList.push({ name: plugin.name, plugin: { ...plugin, instance: packageContents } })
    }
        
    registerPlugin(plugin: IPlugin) {
        if (!plugin.name || !plugin.packageName) {
            throw new Error('The plugin name and package are required.');
        }

        if (this.isPluginExists(plugin.name)) {
            throw new Error(`Pluging with name "${plugin.name}" already exist.`);
        }

        try {
            const packageContents = plugin.isRelative 
                ? requireModule(path.join(__dirname, plugin.packageName)) 
                : requireModule(plugin.packageName);

            this.addPlugin(plugin, packageContents);
        } catch (error) {
            throw new Error(`Cannot load plugin: ${plugin.name}: ${error}`);
        }
    }

    loadPlugin<T>(name: string): T {
        const plugin = this.pluginList.find(pluginConfig => pluginConfig.name == name);
        if (!plugin) {
          throw new Error(`Cannot find plugin: ${name}`);
        }
        
        plugin.plugin.instance.default.prototype.options = plugin.plugin.options;
        return Object.create(plugin?.plugin.instance.default.prototype) as T;
    }

    getPluginList() {
        return JSON.stringify(this.pluginList);
    }
}

export default PluginManager;
