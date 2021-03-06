import { Pipe, PipeTransform } from '@angular/core';
import { iif, map, of, throwError } from 'rxjs';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(text: any) {
    const checkValidation = (): boolean => {
      if (typeof text != 'string') return false;
      return true;
    };

    let capitaliedText$ = of(text).pipe(
      map((text) => {
        let firstLetterCapitalized: string = text[0].toUpperCase();
        let restText: string = text.slice(1);
        let result: string = firstLetterCapitalized + restText;
        return result;
      })
    );

    let finalText$ = iif(
      () => checkValidation(),
      capitaliedText$,
      throwError(() => 'Text must be an string')
    );

    return finalText$;
  }
}
