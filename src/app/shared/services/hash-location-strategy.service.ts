import { Injectable } from '@angular/core';
import { HashLocationStrategy, LocationChangeListener } from "@angular/common";

@Injectable()
export class HashLocationStrategyService extends HashLocationStrategy {
  prepareExternalUrl(internal: string): string {
    return '/pniot/tohash' + internal.replace('/', '/#');
  }
}
