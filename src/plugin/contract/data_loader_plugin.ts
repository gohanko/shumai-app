abstract class DataLoaderPlugin {
    abstract getLabel(): any;
    abstract getIcon(): any;
    abstract getLoader(param: any): any;
}

export default DataLoaderPlugin;