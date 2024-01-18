import process from 'process'
import { JSONRPCServer } from "json-rpc-2.0";
import PluginManager from "./plugins/plugin_manager";
import { initializeServer, listen } from "./rpc/server"

const rpcServer = new JSONRPCServer();
const pluginManager = new PluginManager();

initializeServer(rpcServer, pluginManager);

process.stdin.setEncoding('utf8')
process.stdin.on('data', (data) => {
    const inputJson = JSON.parse(data.toString())

    listen(rpcServer, inputJson, (responseData) => {
        console.log(responseData)
    })
})
