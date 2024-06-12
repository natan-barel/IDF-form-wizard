import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { filter, tap, switchMap } from 'rxjs/operators';
import { MesharetDataService } from '../../services/mesharet-data-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private mesharetDataService: MesharetDataService,
    public router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.mesharetDataService.getMesharetDataSubject().pipe(
      switchMap((Mesharet) => {
        return of(
          Mesharet.IsHasEligibilityForDuringServiceStudies as boolean
        ).pipe(
          tap((canEnter) => {
            if (!canEnter) {
              this.router.navigate(['no-eligibility']);
            }
          })
        );
        // return of(true);
      })
    );
  }
}
