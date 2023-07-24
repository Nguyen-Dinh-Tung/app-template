export const formatNumber = (num: any, decimal?: number) =>
  Number(num || 0).toLocaleString("de-DE", {
    maximumFractionDigits: decimal || 0,
  });

let debounceTimer: any = "";
export const debounce = (fun: any, delayTime: number) => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(fun, delayTime);
};
