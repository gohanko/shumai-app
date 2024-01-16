import path from "path";
import fs from 'fs';
import xlsx from 'xlsx';
import { DataLoaderPlugin } from "../../src/plugin/contract";

class CSVLoader extends DataLoaderPlugin {
    isFileFormatSupported(filename: string) {
        const extension = path.extname(filename);
        return extension === '.csv';
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

    getLabel() {
        const label: string = "CSVLoader"
        return label
    }

    getLoader() {
        return (uri: string) => {
            if (!this.isFileFormatSupported(uri)) {
                throw new Error('File format not supported.')
            }
    
            let parsedData: object[] = this.readCSVFile(uri);
            return parsedData;
        }
    }
}

export default CSVLoader;
