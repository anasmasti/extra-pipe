import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'localizedDate',
})
export class LocalizedPipe implements PipeTransform {
  transform(value: Date, userLanguage: string = 'en-US') {
    const date = new Date(value);

    if (isNaN(date.getTime())) return '';

    const dateFormatter = new Intl.DateTimeFormat(userLanguage, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    const localizedDate = dateFormatter.format(date);

    return localizedDate;
  }
}
