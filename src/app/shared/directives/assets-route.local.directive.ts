import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[assetsRouteDirective]',
})
export class AssetsRouteDirective {
  private _baseRoute = '';

  constructor(el: ElementRef) {
    el.nativeElement.src = el.nativeElement.src.replace(
      '/assets/',
      '/' + this._baseRoute + '/assets/'
    );
  }
}
