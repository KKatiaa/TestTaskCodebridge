import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSuffix'
})
export class DateSuffixPipe implements PipeTransform {
  transform(date: string): string {
    const value = new Date(date);
    const dayNum: number =  value.getDate();
    const month: number =  value.getMonth() + 1;
    const year: number =  value.getFullYear();
    let suffix = 'th';
    const day = String(dayNum);
    if (day === '1' || day === '21' || day === '31') {
      suffix = 'st';
    } else if (day === '2' || day === '22') {
      suffix = 'nd';
    } else if (day === '3' || day === '23') {
      suffix = 'rd';
    }
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const res = monthNames[month] + ' ' + dayNum + suffix + ', ' + year;
    return res;
}
}
