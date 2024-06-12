import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IconModalComponent } from 'src/app/shared/components/simple-modal-with-img/icon-modal.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(protected dialog: MatDialog) {}

  showSuccess(message: string): void {}

  showError(message: string): void {
    let dialogContent = {
      header: 'this._umbracoData.EndScreenTitle',
      content: 'this._umbracoData.EndScreenText',
      iconName: 'attention',
      buttons: [
        {
          cssClass: 'btn btn--yellow btn--border',
          label: 'this._umbracoData.EndScreenButton',
          actions: {
            close: 'privateZone',
          },
        },
      ],
    };
    const dialogRef = this.dialog.open(IconModalComponent, {
      data: dialogContent,
      panelClass: 'simple-dialog-wrapper',
      width: '80rem',
      disableClose: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.length) {
        this[result]();
      }
    });
  }
}
