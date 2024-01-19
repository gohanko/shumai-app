import path from "path";
import fs from 'fs';
import xlsx from 'xlsx';
import DataLoaderPlugin from "../../src/plugins/contract";
import { TableDataFormatType } from "../../src/types/data_type";

class CSVLoader extends DataLoaderPlugin {
    _isFileFormatSupported(filename: string) {
        const extension = path.extname(filename);
        return extension === '.csv';
    }

    _readCSVFile(filename: string) {
        const rawData = fs.readFileSync(filename);
        const workbook = xlsx.read(rawData, { raw: true, cellDates: true });

        const parsedData = Object.keys(workbook.Sheets).map((sheetName: string) => {
            const sheet = workbook.Sheets[sheetName]
            return xlsx.utils.sheet_to_json(sheet, { header: 1 });
        })

        return parsedData;
    }

    load(uri: string): TableDataFormatType {
        if (!this._isFileFormatSupported(uri)) {
            throw new Error('File format not supported.')
        }

        let parsedData: any[] = this._readCSVFile(uri);
        
        return {
            source_uri: uri,
            data: parsedData
        };
    }
}

export default CSVLoader;