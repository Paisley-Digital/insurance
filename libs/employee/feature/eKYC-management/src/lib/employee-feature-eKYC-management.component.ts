import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { EmployeeFeatureEKYCManagementSideNavComponent } from './employee-feature-eKYC-management-side-nav.component';

@Component({
  selector: 'insurance-employee-feature-e-kyc-management',
  imports: [
    CommonModule,
    MatCardModule,
    EmployeeFeatureEKYCManagementSideNavComponent,
  ],
  templateUrl: './employee-feature-eKYC-management.component.html',
  styleUrl: './employee-feature-eKYC-management.component.scss',
})
export class EmployeeFeatureEKYCManagementComponent {}
