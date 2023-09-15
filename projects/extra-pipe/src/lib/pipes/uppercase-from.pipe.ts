import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseFrom',
})
export class UpperCaseFromPipe implements PipeTransform {
  transform(value: any, args: number) {
    let result: string;
    let letters: string[] = [...value];

    letters.splice(args, 1, value[args].toUpperCase());

    result = letters.toString().replaceAll(',', '');

    return result;
  }
}
