import { ROUND_HALF_PARAMS } from '../enums/round-half.enum';
import { RoundHalfParam } from '../types/round-half.type';

function roundHalfUp(number: number): number {
  return +(Math.round(+(number + 'e+2')) + 'e-2');
}

function roundHalfDown(number: number): number {
  return -(Math.round(-(number + 'e+2')) + 'e-2');
}

export function roudHalfFacade(number: number, type: RoundHalfParam) {
  return type === ROUND_HALF_PARAMS.up
    ? roundHalfUp(number)
    : roundHalfDown(number);
}
