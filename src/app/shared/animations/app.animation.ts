import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export function fadeInOut() {
  return trigger('fadeInOut', [
    state('*', style({ opacity: 1, transform: 'translateX(0)' })),
    transition(':enter', [
      // :enter is alias to 'void => *'
      style({ opacity: 0 }),
      animate(1000, style({ opacity: 1 })),
    ]),
    transition(':leave', [
      // :leave is alias to '* => void'
      animate(1000, style({ opacity: 0 })),
    ]),
  ]);
}
