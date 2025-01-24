import { Route } from '@angular/router';
import {CustomerFeatureShellComponent} from "./customer-feature-shell.component";

export const shellRoutes: Route[] = [
  {
    path: '',
    component: CustomerFeatureShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
      },
    ],
  },
];
