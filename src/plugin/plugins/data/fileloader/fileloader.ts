import { DataPlugin } from "../../../contract";

class FileLoader extends DataPlugin {
    private filename: string;
    
    constructor(filename: string) {
        super();
        this.filename = filename;
    }

    start(param: any) {
        
    }
}

export default FileLoader;