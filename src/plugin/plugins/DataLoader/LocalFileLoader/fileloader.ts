import path, { parse } from "path";
import fs from 'fs';
import xlsx from 'xlsx';
import { DataPlugin } from "plugin/contract";

class FileLoader extends DataPlugin {
    private filename: string;
    private SUPPORTED_FILE_FORMAT: string[];
    
    constructor(filename: string) {
        super();
        this.filename = filename;

        this.SUPPORTED_FILE_FORMAT = [
            '.csv',
        ]
    }

    _isFileFormatSupported(filename: string) {
        const extension = path.extname(filename);
        return this.SUPPORTED_FILE_FORMAT.includes(extension);
    }

    readCSVFile(filename: string) {
        const rawData = fs.readFileSync(filename);
        const workbook = xlsx.read(rawData, { raw: true, cellDates: true });

        const parsedData = Object.keys(workbook.Sheets).map((sheetName: string) => {
            const sheet = workbook.Sheets[sheetName]
            return xlsx.utils.sheet_to_json(sheet, { header: 1 });
        })

        return parsedData;
    }

    readDataFile(filename: string) {
        if (!this._isFileFormatSupported(filename)) {
            throw new Error('File format not supported.')
        }

        let parsedData: any[] = [];

        const extension = path.extname(filename);
        switch(extension) {
            case this.SUPPORTED_FILE_FORMAT[0]:
                parsedData = this.readCSVFile(filename);
                break
            default:
                break;
        }

        return parsedData;
    }

    loadData(param: any) {
        return this.readDataFile(param);
    }
}

export default FileLoader;