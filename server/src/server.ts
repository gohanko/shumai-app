import dotenv from 'dotenv';
import app from './index';
import { extensionRouter } from '@routers/index';
import PluginManager from 'plugin/manager';
import DataLoaderPlugin from 'plugin/contract/data_loader_plugin'

dotenv.config();

const PORT = process.env.PORT || 3000
const pluginManager = new PluginManager();

pluginManager.registerPlugin({
    name: 'csv-loader',
    packageName: './plugins/csv-loader/',
})

app.set('pluginManager', pluginManager);

app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}`)
})

app.use('/extensions/', extensionRouter);