import getLoader from '../loaders';

const listInstalledPlugins = (args, done) => {
    done(null, JSON.parse(''))
}

const loadDataUsingDataLoader = (args, done) => {
    try {
        const loaderName = args?.loaderName;
        const loader = getLoader(loaderName)
        const data = loader.load(args.uri)
        done(null, data)
    } catch (error) {
        const errorResponse = {
            code: 404,
            message: error.message
        }

        done(errorResponse)
    }
}

export {
    listInstalledPlugins,
    loadDataUsingDataLoader
}