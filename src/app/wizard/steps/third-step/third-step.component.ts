import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StepComponentBase } from '@wizard/stepper/step-component-base/step-component-base';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.less']
})
export class ThirdStepComponent extends StepComponentBase implements OnInit {

  constructor(
    protected override dialog: MatDialog,
    protected override cdr: ChangeDetectorRef,
  ) {
    super(dialog, cdr);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

}
