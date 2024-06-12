import { MesharetDataService } from 'src/app/services/mesharet-data-service.service';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IconModalComponent } from 'src/app/shared/components/simple-modal-with-img/icon-modal.component';

@Injectable({
  providedIn: 'root',
})
export class AppErrorService {
  private dialogContent: any;
  constructor(protected dialog: MatDialog) {}
  showError(): void {
    const dialogRef = this.dialog.open(IconModalComponent, {
      data: this.dialogContent,
      panelClass: 'simple-dialog-wrapper',
      width: '80rem',
      disableClose: false,
    });
  }

  setDialogContent(content: any) {
    this.dialogContent = content;
  }
}
