abstract class DataPlugin {
    options: any;
    abstract loadData(param: any): any;
}

export default DataPlugin;