import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to convert camel case string to title separated case.
 */
@Pipe({
  standalone: true,
  name: 'camelCaseToTitleSeperatedCase',
})
export class CamelCaseToTitleSeperatedCasePipe implements PipeTransform {
  /**
   * Transforms a camel case string to title separated case.
   * @param value - The string to transform.
   * @returns The transformed string.
   */
  transform(value: any): string {
    if (typeof value === 'string')
      return value.replace(/([A-Z])/g, ' $1').toString();
    else return value;
  }
}
