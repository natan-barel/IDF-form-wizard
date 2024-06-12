import { Component, OnInit } from '@angular/core';
// import { MesharetDataService } from 'src/app/services/mesharet-data-service.service';

@Component({
  selector: 'app-no-eligibility-page',
  templateUrl: './no-eligibility-page.component.html',
  styleUrls: ['./no-eligibility-page.component.less'],
})
export class NoEligibilityPageComponent implements OnInit {
  // public umbracoData = this.mesharetDataService.getUmbracoDataSubject();
  public noEnterScreenDescriptionText = null;

  // constructor(private mesharetDataService: MesharetDataService) {}

  constructor() { }

  ngOnInit(): void {
    // this.mesharetDataService.getUmbracoDataSubject().subscribe((data) => {
    //   this.noEnterScreenDescriptionText = data.noEnterScreenDescriptionText.filter(x=> x != ''); 
    // })
  }
}
