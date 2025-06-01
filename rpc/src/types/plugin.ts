export type IPlugin = {
    name: string
    packageName: string,
    isRelative?: boolean,
    instance?: any;
    options?: any;
}