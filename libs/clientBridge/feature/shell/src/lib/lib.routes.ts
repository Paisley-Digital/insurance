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
        redirectTo: 'customer-management',
      },
      {
        path: 'customer-management',
        loadChildren: () =>
          import('@insurance-clientBridge-feature-products').then(
            (m) => m.productsRoutes
          ),
      },
    ],
  },
];
