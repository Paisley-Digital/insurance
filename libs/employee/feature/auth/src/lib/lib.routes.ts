import { Route } from '@angular/router';
import {EmployeeFeatureAuthComponent} from "./employee-feature-auth.component";

export const authRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: EmployeeFeatureAuthComponent,
  },
];
