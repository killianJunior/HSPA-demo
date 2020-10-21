import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filteringString: string, propName: string): any[] {
    const resultArray = []; //empty array constant
    // if the parameters of pipe contains nothing?
    if (value.length === 0 || filteringString === '' || propName === '') {
      return value;
    }

    // if the parameter contains something, match it to a propName and push
    // it into the resulting array
    for(const item of value){
      if (item[propName] === filteringString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
