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
      import('@insurance-clientBridge-feature-auth').then((m) => m.authRoutes),
  },
  {
    path: 'console',
    loadChildren: () =>
      import('@insurance-clientBridge-feature-shell').then(
        (m) => m.shellRoutes
      ),
  },
];
