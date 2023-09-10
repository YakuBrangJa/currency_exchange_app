export function calculatePropotionalRelation(A1, B1, A2 = 1) {
  if (!A1 || !B1 || !A2) return;

  const B2 = (B1 * A2) / A1;

  return Math.round(B2 * 10000) / 10000;
}
