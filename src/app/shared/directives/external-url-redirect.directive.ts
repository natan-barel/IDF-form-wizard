import { Directive, ElementRef, HostListener } from '@angular/core';
import { WindowRefService } from '../../services/window-ref.service';

@Directive({
  selector: '[externalUrlRedirectDirective]'
})

export class ExternalUrlRedirectDirective {
  constructor(el: ElementRef, private window: WindowRefService) {
    window.NativeWindow.location.href = el.nativeElement.href;
  }
}
