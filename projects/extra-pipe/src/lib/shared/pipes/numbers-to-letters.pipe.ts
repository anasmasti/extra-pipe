import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'numberToLetters'
})
export class NumberToLettersPipe implements PipeTransform {
  private readonly units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  private readonly teens = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  private readonly tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  transform(value: number): string {
    if (value === 0) {
      return 'Zero';
    } else {
      return this.convertToWords(value);
    }
  }

  private convertToWords(num: number): string {
    if (num < 10) {
      return this.units[num];
    } else if (num == 10) {
      return this.tens[1];
    } else if (num < 20) {
      return this.teens[num - 10];
    } else if (num < 100) {
      return this.tens[Math.floor(num / 10)] + ' ' + this.units[num % 10];
    } else if (num < 1000) {
      return this.units[Math.floor(num / 100)] + ' Hundred ' + this.convertToWords(num % 100);
    } else if (num < 10000) {
      return this.units[Math.floor(num / 1000)] + ' Thousand ' + this.convertToWords(num % 1000);
    } else if (num < 1000000) {
      return this.convertToWords(Math.floor(num / 1000)) + ' Thousand ' + this.convertToWords(num % 1000);
    } else if (num < 1000000000) {
      return this.convertToWords(Math.floor(num / 1000000)) + ' Million ' + this.convertToWords(num % 1000000);
    }
    return 'Number is too large to convert';
  }
}
