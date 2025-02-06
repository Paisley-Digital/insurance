import { Route } from '@angular/router';
import { EmployeeFeatureShellComponent } from './employee-feature-shell.component';

export const shellRoutes: Route[] = [
  {
    path: '',
    component: EmployeeFeatureShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('@insurance-employee-feature-dashboard').then(
            (m) => m.dashboardRoutes
          ),
      },
    ],
  },
];
