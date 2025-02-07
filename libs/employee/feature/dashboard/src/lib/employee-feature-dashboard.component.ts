import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'insurance-dashboard',
  imports: [CommonModule,MatButtonModule,MatIconModule],
  templateUrl: './employee-feature-dashboard.component.html',
  styleUrl: './employee-feature-dashboard.component.scss',
})
export class DashboardComponent {}
