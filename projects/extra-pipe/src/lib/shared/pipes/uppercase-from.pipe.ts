import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'upperCaseFrom',
})
export class UpperCaseFromPipe implements PipeTransform {
  transform(value: string, args: number) {
    if (!value) return '';

    let result: string;
    let letters: string[] = [...value];

    if (letters.length < args) return '';

    letters.splice(args, 1, value[args].toUpperCase());

    result = letters.toString().replaceAll(',', '');

    return result;
  }
}
