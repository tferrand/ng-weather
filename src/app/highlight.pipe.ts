import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, args: any): any {
    if (!args) {
      return value;
    }

    const regex = new RegExp(args, 'gi');
    const match = value.match(regex);

    if (!match) {
      return value;
    }

    return value.replace(regex, `<mark><b>${match[0]}</b></mark>`);
  }

}