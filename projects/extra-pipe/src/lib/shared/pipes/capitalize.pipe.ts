import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
