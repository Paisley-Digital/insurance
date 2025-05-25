import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@insurance-customer-feature-auth').then((m) => m.insuranceCustomerAuthRoutes),
  },
  {
    path: 'console',
    loadChildren: () =>
      import('@insurance-customer-feature-shell').then((m) => m.shellRoutes),
  },
];
