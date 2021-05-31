import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value.length > 1) {
      let result = '';
      value.split(' ').forEach((val) => {
        result += val.charAt(0).toUpperCase() + val.substr(1) + ' ';
      });
      return result;
    }
    return value.charAt(0).toUpperCase() + value.substr(1);
  }
}
