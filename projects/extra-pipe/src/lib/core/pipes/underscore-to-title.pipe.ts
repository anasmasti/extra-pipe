import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to convert underscore separated strings to title case.
 */
@Pipe({
  standalone: true,
  name: 'underscoreToTitle',
})
export class UnderscoreToTitlePipe implements PipeTransform {
  /**
   * Transforms an underscore separated string to title case.
   * @param value - The string to transform.
   * @returns The transformed string.
   */
  transform(value: any): string {
    if (typeof value === 'string') {
      return this._convertUnderscoreToTitle(value);
    }
    return value;
  }

  private _convertUnderscoreToTitle(value: string): string {
    return value.replace(/_/g, ' ');
  }
}
