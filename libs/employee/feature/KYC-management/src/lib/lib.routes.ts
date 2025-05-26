import { Route } from '@angular/router';
import { InsuranceFeatureEmployeeKycManagementComponent } from './insurance-feature-employee-kyc-management.component';
import { InsuranceEmployeeFeatureTemplatesComponent } from './insurance-employee-feature-templates-.component';
import { InsuranceEmployeeFeatureSchedulePageComponent } from './insurance-employee-feature-schedule-page.component';
import { InsuranceEmployeeFeatureHistoryComponent } from './insurance-employee-feature-history.component';

export const kYCManagementRoutes: Route[] = [
  {
    path: '',
    component: InsuranceFeatureEmployeeKycManagementComponent,
    children: [
      { path: 'templates', component: InsuranceEmployeeFeatureTemplatesComponent },
      { path: 'schedule', component: InsuranceEmployeeFeatureSchedulePageComponent },
      { path: 'history', component: InsuranceEmployeeFeatureHistoryComponent },
      { path: '', redirectTo: 'templates', pathMatch: 'full' }
    ]
  }
];
