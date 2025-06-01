import { TableDataFormatType } from '../types/data_type'

abstract class DataLoaderPlugin {
    abstract load(uri: string): TableDataFormatType;
}

export default DataLoaderPlugin;
