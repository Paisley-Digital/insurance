import {ApplicationConfig, ENVIRONMENT_INITIALIZER, inject, LOCALE_ID, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";
import {provideNativeDateAdapter} from "@angular/material/core";
import {MAT_DEFAULT_OPTIONS_OVERRIDES} from "@insurance-shared-util-web-sdk";
import {clientBridgeSharedUiIconRegister} from "@insurance-clientBridge-shared-icon";
import {overrideLocaleData} from "@insurance-shared-util-locales";
import {provideSharedUtilAppCore} from "@insurance-shared-util-app-core";
import {environment} from "../environments/environment";

function initializeEnvironment() {
  const localeId = inject(LOCALE_ID);

  clientBridgeSharedUiIconRegister();
  overrideLocaleData(localeId);
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideHttpClient(),
    provideNativeDateAdapter(),
    provideRouter(appRoutes),
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: initializeEnvironment,
    },
    provideSharedUtilAppCore(environment),
    ...MAT_DEFAULT_OPTIONS_OVERRIDES,
  ],
};
