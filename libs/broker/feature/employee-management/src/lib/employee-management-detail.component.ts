import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatCard } from '@angular/material/card';
import { MatIconButton } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { COLLECTED_DATA_EMPLOYEE, Employee } from './constant';

@Component({
  selector: 'insurance-employee-management-detail',
  imports: [CommonModule, MatIcon, MatCard, MatIconButton, NgOptimizedImage],
  templateUrl: './employee-management-detail.component.html',
  styleUrl: './employee-management-detail.component.scss',
})
export class EmployeeManagementDetailComponent implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  collectedData = COLLECTED_DATA_EMPLOYEE;
  selectedEmployee = signal<Employee | null>(null);

  ngOnInit() {
    this.findSelectedEmployee();
  }

  backToEmployeeManagement() {
    this.router.navigate(['/console/employee-management']);
  }

  private findSelectedEmployee() {
    const selectedEmployee = this.collectedData.find(
      (data) => data.id.toString() === this.activatedRoute.snapshot.params['id']
    );
    this.selectedEmployee.set(selectedEmployee!);
  }
}
