import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appTwoDigitDecimalNumber]',
})
export class TwoDigitDecimalDirective {
  private regex: RegExp = new RegExp(/^\d*(?:[.]\d{1,2})?$/g);
  private specialKeys: Array<string> = [
    'Backspace',
    'Tab',
    'End',
    'Home',
    'ArrowLeft',
    'ArrowRight',
    'Del',
    'Delete',
  ];
  constructor(private el: ElementRef) {}
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && next.match(/^\d*(?:[.]\d{0,2})?$/g) === null) {
      event.preventDefault();
    }
  }
}