import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doublevalue'
})
export class MyNewPipePipe implements PipeTransform {

  transform(value: any): number {
    return value*2;
  }

}
