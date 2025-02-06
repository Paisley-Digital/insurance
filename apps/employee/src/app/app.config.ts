import {ApplicationConfig, ENVIRONMENT_INITIALIZER, inject, LOCALE_ID, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {MAT_DEFAULT_OPTIONS_OVERRIDES} from "@shared-util-web-sdk";
import {employeeSharedUiIconRegister} from "@shared-ui-icon";
import {overrideLocaleData} from "@./locales";
import {environment} from "../environments/environment";
import {provideSharedUtilAppCore} from "@insurance-shared-app-core";
import {provideHttpClient} from "@angular/common/http";

function initializeEnvironment() {
  const localeId = inject(LOCALE_ID);

  employeeSharedUiIconRegister();
  overrideLocaleData(localeId);
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideHttpClient(),
    provideRouter(appRoutes),
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: initializeEnvironment,
    },
    ...MAT_DEFAULT_OPTIONS_OVERRIDES,
    provideSharedUtilAppCore(environment),
  ],
};
