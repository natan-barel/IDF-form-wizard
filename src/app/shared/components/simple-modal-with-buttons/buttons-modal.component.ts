import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-buttons-modal',
  templateUrl: './buttons-modal.component.html',
  styleUrls: ['./buttons-modal.component.less']
})
export class ButtonsModalComponent {

  @Output() callFunction = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<ButtonsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeModal(): void {
    this.dialogRef.close();
  }

}
