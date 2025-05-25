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
        redirectTo: 'complianceoverview',
      },
      {
        path: 'complianceoverview',
        loadChildren: () =>
          import('@insurance-employee-feature-dashboard').then(
            (m) => m.dashboardRoutes
          ),
      },
      {
        path:'upload',
        loadChildren: () => import('@insurance-employee-feature-upload').then(m => m.uploadRoutes)
      }
    ],
  },
];
