abstract class DataLoaderPlugin {
    abstract getLabel(): string;
    abstract getLoader(): (uri: string) => void;
}

export default DataLoaderPlugin;