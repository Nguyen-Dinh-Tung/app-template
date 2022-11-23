export const formatNumber = (num: any, decimal?: number) =>
  Number(num || 0).toLocaleString("de-DE", {
    maximumFractionDigits: decimal || 0,
  });
