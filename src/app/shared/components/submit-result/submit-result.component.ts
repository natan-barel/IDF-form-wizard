import { Component, OnInit } from '@angular/core';
import { MesharetDataService } from 'src/app/services/mesharet-data-service.service';

@Component({
  selector: 'app-submit-result',
  templateUrl: './submit-result.component.html',
  styleUrls: ['./submit-result.component.less'],
})
export class SubmitResultComponent implements OnInit {
  public umbracoData = this.mesharetDataService.getUmbracoDataSubject();
  public EndScreenText = null;
  constructor(private mesharetDataService: MesharetDataService) {}

  ngOnInit(): void {
    this.mesharetDataService.getUmbracoDataSubject().subscribe((data) => {
      this.EndScreenText = data.EndScreenText.filter(x=> x != ''); 
    })
  }
}
