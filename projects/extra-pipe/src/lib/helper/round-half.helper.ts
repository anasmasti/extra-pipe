export function roundHalfUp(number: number): number {
  return +(Math.round(+(number + 'e+2')) + 'e-2');
}

export function roundHalfDown(number: number): number {
  return -(Math.round(-(number + 'e+2')) + 'e-2');
}
