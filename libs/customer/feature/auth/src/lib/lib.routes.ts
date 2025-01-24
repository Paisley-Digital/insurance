import { Route } from '@angular/router';
import {CustomerFeatureAuthComponent} from "./customer-feature-auth.component";

export const authRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: CustomerFeatureAuthComponent,
  },
];
