import { NgModule } from '@angular/core';
import { StepPageWrapperComponent } from './stepper/step-page-wrapper/step-page-wrapper.component';
import { PageDirective } from './page-directive/page.directive';
import { StepComponentBase } from './stepper/step-component-base/step-component-base';
import { StepPagesService } from './services/step-pages.service';
import { WizardStepperComponent } from './stepper/wizard-stepper.component';
import { StepperButtonsComponent } from './stepper/stepper-buttons/stepper-buttons.component';
import { SharedModule } from '@shared/shared.module';
import { WaveAnimationComponent } from './wave-animation/wave-animation.component';
import { WelcomeStepComponent } from './steps/welcome-step/welcome-step.component';
import { PreviousEducationStepComponent } from './steps/previous-education-step/previous-education-step.component';

export const COMPONENTS = [WelcomeStepComponent, PreviousEducationStepComponent, WizardStepperComponent, StepPageWrapperComponent, StepperButtonsComponent, StepComponentBase, WaveAnimationComponent];
export const DIRECTIVES = [PageDirective];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [SharedModule],
  exports: [...COMPONENTS, ...DIRECTIVES],
  providers: [StepPagesService]
})
export class WizardModule { }