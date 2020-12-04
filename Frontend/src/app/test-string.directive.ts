import { Directive, ElementRef, HostListener,  Input } from '@angular/core';
import { isNumeric } from 'rxjs/internal-compatibility';

@Directive({
  selector: '[appTestString]'
})
export class TestStringDirective {

  constructor(private element: ElementRef) { }
  @Input() control: string;
  @HostListener('focusout') onFocusOut(){
    for(let i = 0; i < this.control.length; i++){
      if(isNumeric(+this.control[i]))
      {
        this.element.nativeElement.style.backgroundColor = 'red';
      }
    }
  }

}