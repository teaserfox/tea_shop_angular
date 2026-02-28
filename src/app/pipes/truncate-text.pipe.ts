import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string, limit: number = 120): string {
    if (!value) return '';
    if (value.length <= limit) return value;

    let result = value.substring(0, limit);

    // если символ на границе — не пробел, добираем слово целиком
    let i = limit;
    while (i < value.length && value[i] !== ' ') {
      result += value[i];
      i++;
    }

    return result + ' ...';
  }

}
