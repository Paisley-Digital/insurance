// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from '@insurance-shared-util-web-sdk';

export const environment: Environment = {
  blockSearchIndexing: true,
  trackWebsiteTraffic: false,
  production: false,
  apiRoot: '/api',
  aiKey:
    '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',
  imagesPath: './assets/images',
  userIdle: {
    idle: 60 * 60,
    timeout: 60 * 2,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
