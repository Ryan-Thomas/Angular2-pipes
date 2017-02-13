import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length === 0) {
      return value;
    } else {
      const resultArray = [];
      for (const item of value) {
        if (item.match('^.*' + args[0] + '.*$')) {
          resultArray.push(item);
        }
      }
      return resultArray;
    }
  }

}
