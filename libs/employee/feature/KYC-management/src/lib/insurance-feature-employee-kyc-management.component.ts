import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceEmployeeFeatureSideNavComponent } from './insurance-employee-feature-side-nav.component';
import {RouterOutlet} from "@angular/router";
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'insurance-feature-employee-kyc-management',
  imports: [
    CommonModule,
    InsuranceEmployeeFeatureSideNavComponent,
    RouterOutlet,
    MatCard,
    MatCardContent,
  ],
  templateUrl: './insurance-feature-employee-kyc-management.component.html',
  styleUrl: './insurance-feature-employee-kyc-management.component.scss',
  standalone: true,
})
export class InsuranceFeatureEmployeeKycManagementComponent {}
