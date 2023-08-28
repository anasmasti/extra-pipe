import { ROUND_HALF_PARAMS } from '../enums/round-half.enum';

export type RoundHalfParam =
  (typeof ROUND_HALF_PARAMS)[keyof typeof ROUND_HALF_PARAMS];
