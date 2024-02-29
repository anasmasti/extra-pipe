/**
 * A custom Angular pipe to convert snake case strings to camel case.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'snakeToCamel',
})
export class SnakeToCamelPipe implements PipeTransform {
  /**
   * Transforms a snake case string to camel case.
   * @param value The snake case string to be transformed.
   * @returns The camel case string.
   */
  transform(value: string): string {
    return value.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
  }
}
