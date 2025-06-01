import CSVLoader from "./CSVLoader"

const loaderList = {
    'CSVLoader': CSVLoader
}

const getLoader = (loaderName: string) => {
    const loader = new loaderList[loaderName]()
    if (!loader) {
        throw new Error('Loader not found!')
    }

    return loader
}

export default getLoader;