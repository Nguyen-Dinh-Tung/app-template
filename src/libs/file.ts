import { utils, writeFile, read } from "xlsx";
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

// const headers = ['STT', 'Mã Căn hộ', 'Họ và tên', 'CCCD/CMT', 'Mật khẩu'];
// const widths = [10, 10, 20, 20, 20];

export const exportExcelFiles = (
  data: any[] = [],
  headers: string[],
  fileName: string,
  widths?: number[]
) => {
  const ws = utils.json_to_sheet(data);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws);

  utils.sheet_add_aoa(ws, [headers], { origin: "A1" });
  ws["!cols"] = headers.map((h: any, ind: number) => ({
    wch: widths?.[ind] || 20,
  }));
  writeFile(wb, fileName + ".xlsx");
};

export const importExcelFile = async (excelFile: any, sheetName?: string) => {
  try {
    const file = await excelFile.arrayBuffer();
    const wb = read(file);
    const data = utils.sheet_to_json(wb.Sheets[sheetName || wb.SheetNames[0]]);
    return data;
  } catch (err: any) {
    console.log("import error", err);
  }
};
