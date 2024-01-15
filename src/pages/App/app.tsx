import React from 'react';
import { useCollectionStore } from 'stores';
import AppLayout from 'layouts/AppLayout';
import PluginManager from 'plugin/manager';

const App = () => {
    const initializeCollection = useCollectionStore((state: any) => state.initializeCollection)
    initializeCollection();

    const pluginManager = new PluginManager()
    pluginManager.registerPlugin({
        name: 'csv-loader',
        packageName: './plugin/plugins/DataLoader/CSVLoader',
        isRelative: true,
    })

    const plugin: any = pluginManager.loadPlugin('csv-loader')
    console.log(plugin.getLabel())

    return (<AppLayout />)
}

export default App;