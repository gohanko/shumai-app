const registerRPCMethods = (rpcServer, rpcMethodList) => {
    Object.entries(rpcMethodList).map(([methodName, methodFunction]) => {
        rpcServer.addMethod(methodName, methodFunction);
    })
}

const registerPlugins = (pluginManager, pluginList) => {
    pluginList.entries((plugin) => {
        pluginManager.registerPlugin(plugin)
    })
}

const initializeServer = (rpcServer, pluginManager) => {
    const rpcMethodList = {
        listPlugin: () => 'heh'
    }

    const pluginList = [{
        name: 'csv-loader',
        packageName: './default_plugins/csv-loader'
    }]

    registerRPCMethods(rpcServer, rpcMethodList);
    registerPlugins(pluginManager, pluginList)
}

const listen = (rpcServer, jsonRPCRequest, onResponse) => {
    rpcServer.receive(jsonRPCRequest).then((jsonResponse) => {
        if (jsonResponse) {
            onResponse(jsonResponse)
        } else {
            onResponse(204)
        }
    })
}

export {
    initializeServer,
    listen,
}