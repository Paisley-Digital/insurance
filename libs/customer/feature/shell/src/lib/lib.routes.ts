import { Route } from '@angular/router';
import {CustomerFeatureShellComponent} from "./customer-feature-shell.component";
import { groupManagementRoutes } from '../../../../group-management/src';

export const shellRoutes: Route[] = [
  {
    path: '',
    component: CustomerFeatureShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
          redirectTo: 'group-management',
      },
      {
        path: 'group-management',
        loadChildren: () =>
          import('@insurance-customer-feature-group-management').then(
            (m) => m.groupManagementRoutes
          ),
      },
    ],
  },
];
