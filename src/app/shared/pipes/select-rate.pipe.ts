import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectRate'
})
export class SelectRatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
