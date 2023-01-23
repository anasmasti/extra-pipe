import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hide',
})
export class HidePipe implements PipeTransform {
  transform(value: string, hide: boolean = true, symbol: string = '*') {
    return hide ? symbol.repeat(value.length) : value;
  }
}
