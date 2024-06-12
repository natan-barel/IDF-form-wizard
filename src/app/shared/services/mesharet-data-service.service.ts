import { Injectable, Inject } from '@angular/core';
import { ApplicationHttpClient } from '../shared/services/ApplicationHttpClient';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MesharetDataService {
  private umbracoDataSubject = new BehaviorSubject<any>(undefined);
  private mesharetDataSubject = new BehaviorSubject<any>(undefined);
  private tohashAbsenceDivisionsSubject = new BehaviorSubject<any>(undefined);
  private tohashCourseOfStudiesSubject = new BehaviorSubject<any>(undefined);
  private tohashStartDateSettingsSubject = new BehaviorSubject<any>(undefined);
  private tohashLearningInstitutesSubject = new BehaviorSubject<any>(undefined);
  private tohashStudiesTypesSubject = new BehaviorSubject<any>(undefined);

  constructor(private appHttpClient: ApplicationHttpClient) {}

  getTohashData() {
    this._getTohashData().subscribe((data) => {
      let content = this.getValidContent(data);

      this.umbracoDataSubject.next(content.UmbracoData);
      this.mesharetDataSubject.next(content.MesharetData);
    });
  }

  getValidContent(i_response) {
    try {
      if (!i_response || !i_response.IsValid) throw i_response.Content;
      return i_response.Content;
    } catch (e) {
      console.error(e.toString());
    }
  }

  loadMesharetDigitalRequestData() {
    this._getTohashAbsenceDivisions().subscribe((data) => {
      this.tohashAbsenceDivisionsSubject.next(this.getValidContent(data));
    });

    this._getTohashCourseOfStudies().subscribe((data) => {
      this.tohashCourseOfStudiesSubject.next(this.getValidContent(data));
    });

    this._getTohashLearningInstitutes().subscribe((data) => {
      this.tohashLearningInstitutesSubject.next(this.getValidContent(data));
    });

    this._getTohashStudiesTypes().subscribe((data) => {
      this.tohashStudiesTypesSubject.next(this.getValidContent(data));
    });

    this._getTohashStartDateSettings().subscribe((data) => {
      this.tohashStartDateSettingsSubject.next(this.getValidContent(data));
    });
  }

  getUmbracoDataSubject(): Observable<any> {
    return this.umbracoDataSubject.asObservable().pipe(filter((a) => !!a));
  }

  getUmbracoData(): any {
    return this.umbracoDataSubject.getValue();
  }

  getMesharetDataSubject(): Observable<any> {
    return this.mesharetDataSubject.asObservable().pipe(filter((a) => !!a));
  }

  getMesharetData() {
    return this.mesharetDataSubject.getValue();
  }

  getTohashStartDateSettings(): Observable<any> {
    return this.tohashStartDateSettingsSubject
      .asObservable()
      .pipe(filter((a) => !!a));
  }

  getTohashAbsenceDivisions(): Observable<any> {
    return this.tohashAbsenceDivisionsSubject
      .asObservable()
      .pipe(filter((a) => !!a));
  }

  getTohashCourseOfStudies(): Observable<any> {
    return this.tohashCourseOfStudiesSubject
      .asObservable()
      .pipe(filter((a) => !!a));
  }

  getTohashLearningInstitutes(): Observable<any> {
    return this.tohashLearningInstitutesSubject
      .asObservable()
      .pipe(filter((a) => !!a));
  }

  getTohashStudiesTypes(): Observable<any> {
    return this.tohashStudiesTypesSubject
      .asObservable()
      .pipe(filter((a) => !!a));
  }

  private _getTohashData(): Observable<any> {
    return this.appHttpClient.get<any>('./assets/test-data/GetTohashData.json');
  }

  private _getTohashAbsenceDivisions(): Observable<any> {
    return this.appHttpClient.get<any>(
      './assets/test-data/GetTohashAbsenceDivisions.json'
    );
  }

  private _getTohashCourseOfStudies(): Observable<any> {
    return this.appHttpClient.get<any>(
      './assets/test-data/GetTohashCourseOfStudies.json'
    );
  }

  private _getTohashLearningInstitutes(): Observable<any> {
    return this.appHttpClient.get<any>(
      './assets/test-data/GetTohashLearningInstitutes.json'
    );
  }

  private _getTohashStartDateSettings(): Observable<any> {
    return this.appHttpClient.get<any>(
      './assets/test-data/GetTohashStartDateSettings.json'
    );
  }

  private _getTohashStudiesTypes(): Observable<any> {
    return this.appHttpClient.get<any>(
      './assets/test-data/GetTohashStudiesTypes.json'
    );
  }

  postDigitalApplication(applicationData: any): Observable<any> {
    return this.appHttpClient.Post('pniot/tohash/SaveRequest', applicationData);
  }
}
