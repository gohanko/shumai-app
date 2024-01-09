import path from 'path';
import fs from 'fs';
import xlsx from 'xlsx';

const SUPPORTED_FILE_FORMAT = [
    '.csv'
]

const FileAdapter = (() => {
    const _isFileTypeSupported = (filename: string) => {
        const extension = path.extname(filename);
        return SUPPORTED_FILE_FORMAT.includes(extension)
    }

    const _handleReadCSV = (filename: string) => {
        const raw_data = fs.readFileSync(filename)
        const workbook = xlsx.read(raw_data, { raw: true, cellDates: true })

        const parsed_data = Object.keys(workbook.Sheets).map((name) => {
            const sheet = workbook.Sheets[name]
            return {
                name,
                data: xlsx.utils.sheet_to_json(sheet, { header: 1 })
            }
        })

        return parsed_data;
    }

    const readFile = (filename: string) => {
        if (!_isFileTypeSupported(filename)) {
            throw Error('FILE_FORMAT_NOT_SUPPORTED');
        }

        const extension = path.extname(filename);
        let parsed_data = undefined;
        switch(extension) {
        case SUPPORTED_FILE_FORMAT[0]:
            parsed_data = _handleReadCSV(filename);
            break;
        }

        return parsed_data;
    }

    return {
        readFile,
    }
})();

export default FileAdapter;