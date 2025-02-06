import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {MAT_DEFAULT_OPTIONS_OVERRIDES} from "@shared-util-web-sdk";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideRouter(appRoutes),
    ...MAT_DEFAULT_OPTIONS_OVERRIDES,
  ],
};
