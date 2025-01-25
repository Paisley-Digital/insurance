import { Route } from '@angular/router';
import { ClientBridgeFeatureProductsComponent } from './clientBridge-feature-products.component';
import { ClientBridgeFeatureProductsUploadFileComponent } from './clientBridge-feature-products-upload-file.component';

export const productsRoutes: Route[] = [
  { path: '', component: ClientBridgeFeatureProductsComponent },
  {
    path: 'details',
    component: ClientBridgeFeatureProductsUploadFileComponent,
  },
];
