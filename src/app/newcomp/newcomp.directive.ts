import { Directive, Output, EventEmitter, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNewcomp]',
})
export class NewcompDirective {
  @Input() values = [];
  @Output() everySecond = new EventEmitter();


  constructor(private el: ElementRef) {

  }

  @HostListener('keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.el.nativeElement.value.trim().length > 0)
      this.everySecond.emit(this.values.filter(x => x.name.toLowerCase().indexOf(this.el.nativeElement.value.toLocaleLowerCase()) > -1))
    else
      this.everySecond.emit([])
  }

}