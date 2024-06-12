import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'valuePipe',
})
export class ValuePipe implements PipeTransform {
  transform(val: any, ...args: any[]): any {
    switch (typeof val) {
      case 'boolean':
        return val ? 'כן' : 'לא';
      case 'number':
        return val;

      default:
        if (moment.isDate(val)) {
          return moment(val).format('DD/MM/YYYY');
        }
        if (val && val.Name) {
          return val.Name;
        }
        return '';
    }
  }
}
