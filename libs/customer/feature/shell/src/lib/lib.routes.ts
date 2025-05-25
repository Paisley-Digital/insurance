import { Route } from '@angular/router';
import { InsuranceFeatureCustomerShellComponent } from './insurance-feature-customer-shell.component';

export const shellRoutes: Route[] = [
  {
    path: '',
    component: InsuranceFeatureCustomerShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'KYCDocuments',
      },
      {
        path: 'KYCDocuments',
        loadChildren: () =>
          import('@insurance-customer-feature-upload').then(
            (m) => m.insuranceCustomerFeatureCustomerRoutes
          ),
      },
      {
        path: 'upload',
        loadChildren: () =>
          import('@insurance-employee-feature-upload').then(
            (m) => m.uploadRoutes
          ),
      },
    ],
  },
];
