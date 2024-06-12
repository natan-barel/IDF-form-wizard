import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { MesharetDataService } from '../../services/mesharet-data-service.service';
import { MatDialog } from '@angular/material/dialog';
import { SimpleModalComponent } from '../../shared/components/simple-modal/simple-modal.component';
import { ButtonsModalComponent } from 'src/app/shared/components/simple-modal-with-buttons/buttons-modal.component';
import { IconModalComponent } from 'src/app/shared/components/simple-modal-with-img/icon-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  // public umbracoData = this.mesharetDataService.getUmbracoDataSubject();
  public firstScreenDescriptionText = null;
  public firstScreenInstructionText = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // private mesharetDataService: MesharetDataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // this.mesharetDataService.getUmbracoDataSubject().subscribe((data) => {
    //   this.firstScreenDescriptionText = data.firstScreenDescriptionText.filter(
    //     (x) => x != ''
    //   );
    //   this.firstScreenInstructionText = data.firstScreenInstructionText.filter(
    //     (x) => x != ''
    //   );
    // });
  }

  gotToApplication() {
    this.router.navigate(['tohashapplication'], {});
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
