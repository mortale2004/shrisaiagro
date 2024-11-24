import { read, utils } from 'xlsx';

/**
 * Converts an uploaded Excel file to JSON format.
 *
 * @param {any} uploadedFile - The uploaded Excel file.
 * @return {Promise<ExcelToJson>} A promise that resolves to an object containing the converted JSON data and a success message.
 * @throws {Object} An object with an empty data array and an error message if the uploaded file is not an Excel file.
 */
const excelToJson = (uploadedFile: any): Promise<ExcelToJson> => {
  return new Promise<ExcelToJson>((resolve, reject) => {
    if (uploadedFile && fileType.includes(uploadedFile.type)) {
      let render = new FileReader();
      render.onload = (e: FileReaderEventMap['load']) => {
        const workBook = read(e?.target?.result);
        const sheet = workBook.SheetNames;
        if (sheet.length) {
          const data: any[] = utils.sheet_to_json(workBook.Sheets[sheet[0]]);
          resolve({ data: data, message: 'success' });
        }
      };
      render.readAsArrayBuffer(uploadedFile);
    } else {
      reject({ data: [], message: 'please upload only excel file' });
    }
  });
};

export default excelToJson;

const fileType: string[] = [
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-excel',
];

export type ExcelToJson = {
  data: any[];
  message: string;
};
