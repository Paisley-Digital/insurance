import { Route } from '@angular/router';

import { InsuranceBrokerFeatureShellComponent } from './insurance-broker-feature-shell.component';

export const shellRoutes: Route[] = [
  {
    path: '',
    component: InsuranceBrokerFeatureShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@insurance-broker-feature-dashboard').then(
            (m) => m.dashboardRoutes
          ),
      },
      {
        path: 'ekyc-management',
        loadChildren: () =>
          import('@insurance-broker-feature-ekyc-management').then(
            (m) => m.ekycManagementRoutes
          ),
      },
    ],
  },
];
