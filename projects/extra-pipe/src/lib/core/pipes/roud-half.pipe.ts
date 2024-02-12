import { Pipe, PipeTransform } from '@angular/core';
import { ROUND_HALF_PARAMS } from '../../shared/enums/round-half.enum';
import { roudHalfFacade } from '../../shared/helper/round-half.helper';
import { RoundHalfParam } from '../../shared/types/round-half.type';

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
