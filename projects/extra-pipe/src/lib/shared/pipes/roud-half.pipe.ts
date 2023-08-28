import { Pipe, PipeTransform } from '@angular/core';
import { roudHalfFacade } from '../helper/round-half.helper';
import { type RoundHalfParam } from '../types/round-half.type';
import { ROUND_HALF_PARAMS } from '../enums/round-half.enum';

@Pipe({
  standalone: true,
  name: 'roundHalf',
})
export class RoundHalfPipe implements PipeTransform {
  transform(
    number: number,
    param: RoundHalfParam = ROUND_HALF_PARAMS.up
  ): number {
    return roudHalfFacade(number, param);
  }
}
