import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'insurance-employee-feature-e-kyc-management-side-nav',
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './employee-feature-eKYC-management-side-nav.component.html',
  styleUrl: './employee-feature-eKYC-management-side-nav.component.scss',
})
export class EmployeeFeatureEKYCManagementSideNavComponent {}
