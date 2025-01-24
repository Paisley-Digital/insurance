import { Route } from '@angular/router';
import {ClientBridgeFeatureAuthComponent} from "./clientBridge-feature-auth.component";

export const authRoutes: Route[] = [{ path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: ClientBridgeFeatureAuthComponent,
     },];
