import { Component, Inject, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-icon-modal',
  templateUrl: './icon-modal.component.html',
  styleUrls: ['./icon-modal.component.less'],
})
export class IconModalComponent implements OnInit {
  @Output() callFunction = new EventEmitter();
  public _data;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<IconModalComponent>
  ) {
    this._data = data;
  }

  ngOnInit() {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
