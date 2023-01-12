import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperOf',
})
export class UpperOfPipe implements PipeTransform {
  transform(value: any, args: number) {
    let result: any;
    let words: string[] = [...value];

    words.splice(args, 1, value[args].toUpperCase());

    result = words.toString().replaceAll(',', '');

    return result;
  }
}
