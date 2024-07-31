import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to check if an array includes a specific element.
 */
@Pipe({
  standalone: true,
  name: 'includes',
  pure: false,
})
export class IncludesPipe implements PipeTransform {
  /**
   * Checks if an array includes a specific element.
   * @param items - The array to check.
   * @param element - The element to search for.
   * @returns True if the element is found in the array, otherwise false.
   */
  transform(items: unknown[], element: unknown): boolean {
    return items && items.length > 0 && element
      ? items.includes(element)
      : false;
  }
}
