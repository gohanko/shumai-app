import path from "path";
import fs from 'fs';
import xlsx from 'xlsx';
import { DataLoaderPlugin } from "plugin/contract";
import { faFileCsv } from "@fortawesome/free-solid-svg-icons";

class CSVLoader extends DataLoaderPlugin {
    private label: string;
    private icon: any
    
    constructor() {
        super();

        this.label = 'CSV Loader'
        this.icon = faFileCsv
    }

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
        return this.label
    }

    getIcon() {
        return this.icon
    }

    getLoader(url: any) {
        if (!this.isFileFormatSupported(url)) {
            throw new Error('File format not supported.')
        }

        let parsedData: any[] = this.readCSVFile(url);
        return parsedData;
    }
}

export default CSVLoader;
