import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentagePipe'
})
export class PercentagePipe implements PipeTransform {

  transform(value: number): string {
     if(isNaN(value)){
      return ''
     } 
     return Math.floor(value*10) + '%'
  }

}
