import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'localizedDate',
})
export class LocalizedPipe implements PipeTransform {
  transform(value: any, userLanguage: string = 'en-US') {
    const date = new Date(value);
    const dateFormatter = new Intl.DateTimeFormat(userLanguage, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    const localizedDate = dateFormatter.format(date);

    return localizedDate;
  }
}
