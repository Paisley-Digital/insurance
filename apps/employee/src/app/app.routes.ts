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
      import('@insurance-employee-feature-auth').then((m) => m.authRoutes),
  },
  {
    path: 'console',
    loadChildren: () =>
      import('@insurance-employee-feature-shell').then((m) => m.shellRoutes),
  },
];
