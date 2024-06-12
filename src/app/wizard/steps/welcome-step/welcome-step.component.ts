import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StepComponentBase } from '@wizard/stepper/step-component-base/step-component-base';
import { IconModalComponent } from 'src/app/shared/components/simple-modal-with-img/icon-modal.component';

@Component({
  selector: 'app-welcome-step',
  templateUrl: './welcome-step.component.html',
  styleUrls: ['./welcome-step.component.less'],
})
export class WelcomeStepComponent extends StepComponentBase implements OnInit {
  // public umbracoData = this.mesharetDataService.getUmbracoDataSubject();
  public startProcessScreenInstructionText = null;
  public startProcessScreenCommandingOfficerInstructionText = null;

  constructor(
    protected override dialog: MatDialog,
    protected override cdr: ChangeDetectorRef,
    // private mesharetDataService: MesharetDataService
  ) {
    super(dialog, cdr);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    // this.mesharetDataService.getUmbracoDataSubject().subscribe((data) => {
    //   this.startProcessScreenInstructionText = data.startProcessScreenInstructionText.filter(
    //     (x) => x != ''
    //   );
    //   this.startProcessScreenCommandingOfficerInstructionText = data.startProcessScreenCommandingOfficerInstructionText.filter(
    //     (x) => x != ''
    //   );
    // });
  }
}
