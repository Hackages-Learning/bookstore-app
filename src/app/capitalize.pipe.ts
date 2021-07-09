import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    let result = '';
    value.split(' ').forEach((el) => {
      result += el.charAt(0).toUpperCase() + el.substr(1) + ' ';
    });
    return result.trim();
  }
}
