import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wave-animation',
  templateUrl: './wave-animation.component.html'
})
export class WaveAnimationComponent implements OnInit {
  @Input() inFinalStep: boolean = false;
  constructor() { }

  ngOnInit(): void { }

}
