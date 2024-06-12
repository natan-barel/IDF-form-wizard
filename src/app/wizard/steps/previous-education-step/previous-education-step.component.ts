import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StepComponentBase } from '@wizard/stepper/step-component-base/step-component-base';
import { SimpleModalComponent } from 'src/app/shared/components/simple-modal/simple-modal.component';

@Component({
  selector: 'app-previous-education-step',
  templateUrl: './previous-education-step.component.html',
  styleUrls: ['./previous-education-step.component.less'],
})
export class PreviousEducationStepComponent
  extends StepComponentBase
  implements OnInit {
  private modalHeader = null;
  private modalText = null;
  isWarningShown: boolean = false;
  public verifyEducationDataScreenInstructionText = null;
  public verifyEducationDataScreenDataNotUpdatedInstructionText = null;

  constructor(
    protected override dialog: MatDialog,
    protected override cdr: ChangeDetectorRef,
  ) {
    super(dialog, cdr);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  onSelectionChange(e: any): void {
    // this.FormGroupRef.get('IsEducationDataIncorrectRadio').value
    //   ? (this.isWarningShown = true)
    //   : (this.isWarningShown = false);
  }

  openInfoDialog(): void {
    let dialogConent = {
      header: this.modalHeader, // header content
      headerClass: 'main-header',
      content: this.modalText,
    };
    const dialogRef = this.dialog.open(SimpleModalComponent, {
      data: dialogConent,
      panelClass: 'simple-dialog-wrapper',
      width: '50rem',
    });
  }
}
