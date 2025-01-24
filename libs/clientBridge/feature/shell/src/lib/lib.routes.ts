import { Route } from '@angular/router';
import {
  ClientBridgeFeatureShellMasterComponent
} from './clientBridge-feature-shell.component';

export const shellRoutes: Route[] = [
  {
    path: '',
    component: ClientBridgeFeatureShellMasterComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products',
      },
      {
        path: 'products',
        loadChildren: () =>
          import('@insurance-clientBridge-feature-products').then(
            (m) => m.productsRoutes
          ),
      },
    ],
  },
];
