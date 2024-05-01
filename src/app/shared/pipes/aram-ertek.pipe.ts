import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aramErtek'
})
export class AramErtekPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let oraegyseggel = value +' kwh'
    return oraegyseggel;
  }

}
