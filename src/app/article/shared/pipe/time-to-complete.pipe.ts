import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeToComplete'
})
export class TimeToCompletePipe implements PipeTransform {

  constructor(
  ) {

  }

  transform(text: any, indexWord: number, speed: number): any {
    const timeToComplete = 1 * (text.length - indexWord) / speed;
    return moment.duration(timeToComplete, 'minutes' as moment.unitOfTime.DurationConstructor).humanize();
  }

}
