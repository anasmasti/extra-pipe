import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'imgUrlBase64',
})
export class Base64ImgUrlPipe implements PipeTransform {
  transform(base64: string, mimeType: string) {
    return `data:${mimeType};base64,${base64}`;
  }
}
