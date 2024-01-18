import { TableDataFormatType } from '../types/data_type'

abstract class DataLoaderPlugin {
    abstract getDataLoader(uri: string): TableDataFormatType;
}

export default DataLoaderPlugin;
