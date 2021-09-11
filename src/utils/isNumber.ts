export function isNumber(n: any) {
  return !Number.isNaN(parseFloat(n)) && Number.isFinite(n);
}
