import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to format Date objects.
 */
@Pipe({
  standalone: true,
  name: 'formatInstanceofDate',
})
export class FormatInstanceofDatePipe implements PipeTransform {
  /**
   * Formats a Date object.
   * @param value - The Date object to format.
   * @param setNumberDateFormat - If true, uses numeric format for the month.
   * @param setTime - If true, includes time in the formatted result.
   * @returns The formatted date string.
   */
  transform(
    value: Date,
    setNumberDateFormat: boolean = false,
    setTime: boolean = false
  ): string {
    if (!(value instanceof Date)) {
      return String(value);
    }

    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: setNumberDateFormat ? 'numeric' : 'short',
      year: 'numeric',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
    };

    const dateFormatter = new Intl.DateTimeFormat('en', options);

    let formattedDate = dateFormatter.format(value);

    if (!setTime) {
      return formattedDate;
    }

    const timeFormat = value.getHours() >= 12 ? 'PM' : 'AM';
    const hours = value.getHours() % 12 || 12;
    const minutes = value.getMinutes().toString().padStart(2, '0');

    const formattedTime = ` ${hours}:${minutes} ${timeFormat}`;

    return `${formattedDate}${formattedTime}`;
  }
}
