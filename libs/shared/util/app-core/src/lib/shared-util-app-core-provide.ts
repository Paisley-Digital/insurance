import {
  API_ROOT,
  ENVIRONMENT,
  Environment,
  IMAGES_PATH,
  DEFAULT_API_ERROR_MESSAGE,
  AI_KEY,
} from '@insurance-shared-util-web-sdk';
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

export function provideSharedUtilAppCore({
  imagesPath,
  apiRoot,
  aiKey,
  ...config
}: Environment): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: ENVIRONMENT,
      useValue: config,
    },
    {
      provide: IMAGES_PATH,
      useValue: imagesPath,
    },
    {
      provide: API_ROOT,
      useValue: apiRoot,
    },
    {
      provide: AI_KEY,
      useValue: aiKey,
    },
    {
      provide: DEFAULT_API_ERROR_MESSAGE,
      useValue: 'Please try again later.',
    },
  ]);
}
