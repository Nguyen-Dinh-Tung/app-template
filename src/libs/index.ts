export const formatNumber = (num: any) =>
  new Intl.NumberFormat("de-DE").format(num || 0);
