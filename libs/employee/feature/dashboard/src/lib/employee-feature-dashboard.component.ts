import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { dashboardMock } from '@insurance-employee-data-dashboards';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'insurance-dashboard',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCard,
    MatCardContent,
  ],
  templateUrl: './employee-feature-dashboard.component.html',
  styleUrl: './employee-feature-dashboard.component.scss',
})
export class DashboardComponent {
  protected readonly dashboardMock = dashboardMock;
}
