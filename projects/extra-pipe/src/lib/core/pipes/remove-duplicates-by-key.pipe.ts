import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to remove duplicate objects from an array based on a specified key.
 */
@Pipe({
  standalone: true,
  name: 'removeDuplicatesByKey',
})
export class RemoveDuplicatesByKeyPipe implements PipeTransform {
  /**
   * Removes duplicate objects from an array based on a specified key.
   * @param arrayData - The array to remove duplicates from.
   * @param key - The key to use for identifying duplicate objects.
   * @returns The array with duplicate objects removed.
   */
  transform<ArrayData>(
    arrayData: ArrayData[],
    key: keyof ArrayData
  ): ArrayData[] {
    if (!arrayData || !Array.isArray(arrayData)) {
      return arrayData;
    }

    const filteredData: ArrayData[] = Array.from(
      new Map(arrayData.map(data => [data[key], data])).values()
    );

    return filteredData;
  }
}
