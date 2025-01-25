import { Route } from '@angular/router';
import { InsuranceFeatureCustomerGroupManagementComponent } from './insurance-feature-customer-group-management';
import { InsuranceFeatureCustomerGroupManagementDetailComponent } from './insurance-feature-customer-group-management-detail.component';

export const groupManagementRoutes: Route[] = [
  { path: '', component: InsuranceFeatureCustomerGroupManagementComponent },
  {
    path: 'details',
    component: InsuranceFeatureCustomerGroupManagementDetailComponent,
  },
];
