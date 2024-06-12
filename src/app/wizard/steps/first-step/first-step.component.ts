import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StepComponentBase } from '@wizard/stepper/step-component-base/step-component-base';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.less'],
})
export class FirstStepComponent extends StepComponentBase implements OnInit {

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
