import { Pipe } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'replaceComma',
})
export class ReplaceCommaPipe {
  transform(value: string | number): number {
    const formattedNumber: string = String(value).replace(',', '.');
    return +formattedNumber;
  }
}
