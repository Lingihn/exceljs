import ExcelJS from 'exceljs'
import {saveAs} from "file-saver";
import * as buffer from "buffer";

export function exportToXLSX(){
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('My Sheet');

  sheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 32 },
    { header: 'D.O.B.', key: 'dob', width: 15, outlineLevel: 1}
  ];
  sheet.addRow({ id: 1, name: 'John Doe', dob: new Date(1970,1,1) });
  sheet.addRow({ id: 2, name: 'Jane Doe', dob: new Date(1965,1,7) });
  sheet.addRow({ id: 3, name: 'Jim Doe', dob: new Date(1975,2,8) });

  workbook.xlsx.writeBuffer().then((buffer: any) => {
    saveAs(new Blob([buffer], { type: 'application/octet-stream' }),
      `Отчет - реестр договоров.xlsx`)
  })
}