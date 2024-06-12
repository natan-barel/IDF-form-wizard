import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WizardStepperComponent } from '@wizard/stepper/wizard-stepper.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tohashapplication',
    component: WizardStepperComponent,
    // canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
