import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WizardModule } from '@wizard/wizard.module';
import { WindowRef } from '@shared/services/window-ref.service';


import { LayoutComponent } from './core/layout/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NoEligibilityPageComponent } from './pages/no-eligibility-page/no-eligibility-page.component';
import { SimpleModalComponent } from '@shared/components/simple-modal/simple-modal.component';
import { ButtonsModalComponent } from '@shared/components/simple-modal-with-buttons/buttons-modal.component';
import { IconModalComponent } from '@shared/components/simple-modal-with-img/icon-modal.component';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    NoEligibilityPageComponent,
    // **** //
    SimpleModalComponent,
    ButtonsModalComponent,
    IconModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    WizardModule,
    // Material Modules
    MatFormFieldModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatInputModule,
    MatTabsModule,
    MatRadioModule,
    MatStepperModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatMenuModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatTooltipModule,
    MatExpansionModule,
    // OverlayModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
