import { Component, Inject, Output, EventEmitter } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.less'],
})
export class SimpleModalComponent {
  @Output() callFunction = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<SimpleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeModal(): void {
    this.dialogRef.close();
  }
}
