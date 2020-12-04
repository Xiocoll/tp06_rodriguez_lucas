import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "phona"
})
export class PhonePipe {
  transform(rawNum:string) {
    rawNum = "+33"+ rawNum;

    const countryCodeStr = rawNum.slice(0,3);
    const areaCodeStr = rawNum.slice(3,5);
    const midSectionStr = rawNum.slice(5,7);
    const midSecondSectionStr = rawNum.slice(7,9);
    const lastSectionStr = rawNum.slice(9,11);
    const lastSecondSectionStr = rawNum.slice(11);

    return `${countryCodeStr} ${areaCodeStr}-${midSectionStr}-${midSecondSectionStr}-${lastSectionStr}-${lastSecondSectionStr}`;
  }
}
