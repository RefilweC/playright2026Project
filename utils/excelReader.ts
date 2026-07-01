// utils/excelReader.ts
import XLSX from 'xlsx';

export function readExcel(path: string) {
  const workbook = XLSX.readFile(path);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json(sheet);
}