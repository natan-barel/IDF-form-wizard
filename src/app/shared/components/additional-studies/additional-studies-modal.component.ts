import { Component, Inject, Output, EventEmitter } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-additional-modal',
  templateUrl: './icon-modal.component.html',
  styleUrls: [],
})
export class AdditionalModalComponent {
  @Output() callFunction = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<IconModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
