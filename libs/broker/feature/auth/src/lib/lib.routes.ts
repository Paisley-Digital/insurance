import { Route } from '@angular/router';
import {BrokerFeatureAuthComponent} from "./broker-feature-auth.component";

export const authRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: BrokerFeatureAuthComponent,
  },
];
