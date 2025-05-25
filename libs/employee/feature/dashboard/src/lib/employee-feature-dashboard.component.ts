import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'insurance-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './employee-feature-dashboard.component.html',
  styleUrls: ['./employee-feature-dashboard.component.scss'],
})
export class DashboardComponent {
  stats = [
    { title: 'Total Employer', value: 32, subtitle: 'Number of registered Employer on the portal.' },
    { title: 'Total Employees', value: 25_868, subtitle: 'Number of employees added by customers.' },
    { title: 'Enrolled Members', value: 21_205, subtitle: 'Individuals registered in an insurance plan with active coverage.' }
  ];

  compliant = 17756;
  nonCompliant = 2559;
  expiring = 890;
}
