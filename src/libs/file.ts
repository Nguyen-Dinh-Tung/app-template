import alert from "components/UI/alert";
import * as Excel from "exceljs";
const server = process.env.REACT_APP_SERVER_API;

export const downloadFile = (data: any[], name: string) => {
  const blob = new Blob(data, {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(blob);
  const a: any = document.createElement("a");
  document.body.appendChild(a);
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
  a.remove();
};

export const exportExcelFiles = (
  data: any[],
  headers: any,
  fileName: string
) => {
  const workbook = new Excel.Workbook();
  const worksheet = workbook.addWorksheet("ExampleSheet");

  // add column headers
  worksheet.columns = headers;
  // [
  //   { header: "Package", key: "package_name", width: 10 },
  //   { header: "Author", key: "author_name", width: 10 },
  // ];

  // Add row using key mapping to columns
  for (let i = 0; i < data.length; i++) {
    worksheet.addRow(data[i]);
  }

  // save workbook to disk
  workbook.xlsx
    .writeBuffer()
    .then((buffer: any) => {
      downloadFile([buffer], fileName);
      console.log("export saveddddddd");
    })
    .catch((err: any) => {
      console.log("export errrrrrrrr", err);
    });
};

const columnSample: any = {
  name: "A",
  class: "B",
  nickName: "C",
  address: "D",
  phoneNumber: "E",
  gender: "F",
  birth: "G",
  parentName: "H",
  note: "I",
};

export const importExcelFile = async (
  excelFile: any,
  columns: any,
  sheetName: string,
  startRow: number
) => {
  return new Promise((resolve) => {
    let result: any = [];
    const workbook = new Excel.Workbook();
    const reader = new FileReader();
    reader.readAsArrayBuffer(excelFile);

    reader.onload = () => {
      const buffer: any = reader.result;
      workbook.xlsx.load(buffer).then((wb: any) => {
        wb.eachSheet((sheet: any, id: any) => {
          if (sheet.name == sheetName) {
            sheet.eachRow((row: any, rowIndex: any) => {
              try {
                if (rowIndex >= startRow) {
                  const resultItem: any = {};
                  for (const key in columns) {
                    resultItem[key] = row.getCell(columns[key]).value;
                  }
                  result.push(resultItem);
                }
              } catch (error: any) {
                resolve([]);
                alert(error.message, "error");
                console.log("excel input errorrrrrr", error);
              }
            });
          }
        });

        resolve(result);
      });
    };
  });
};

export const importExcelFile2 = async (excelFile: any) => {
  return new Promise((resolve) => {
    let headers: any = [];
    let result: any = [];
    const workbook = new Excel.Workbook();
    const reader = new FileReader();
    reader.readAsArrayBuffer(excelFile);

    reader.onload = () => {
      const buffer: any = reader.result;
      workbook.xlsx.load(buffer).then((wb: any) => {
        wb.eachSheet((sheet: any, id: any) => {
          if (id == 1) {
            sheet.eachRow((row: any, rowIndex: any) => {
              try {
                if (rowIndex == 1 && row.values) {
                  headers = row.values.slice(1);
                }
                if (rowIndex >= 2 && row.values) {
                  const temp = row.values.slice(1);
                  const ob: any = {};
                  for (let i = 0; i < headers.length; i++) {
                    const key = headers[i];
                    ob[key] = temp[i];
                  }
                  result.push(ob);
                }
              } catch (error: any) {
                resolve([]);
                alert(error.message, "error");
                console.log("excel input errorrrrrr", error);
              }
            });
          }
        });

        resolve({ headers, data: result });
      });
    };
  });
};
