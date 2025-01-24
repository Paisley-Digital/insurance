import { InjectionToken } from '@angular/core';

import { Environment } from './models';

export const ENVIRONMENT = new InjectionToken<Environment>(
  'Environment Variables'
);

export const IMAGES_PATH = new InjectionToken<string>('Images Path');

export const API_ROOT = new InjectionToken<string>('API Root');

export const TRANSLATIONS = new InjectionToken<string>('Translations');

export const DEFAULT_API_ERROR_MESSAGE = new InjectionToken<string>(
  'Default API Error Message'
);
