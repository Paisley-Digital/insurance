import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatCard } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { COLLECTED_DATA_EMPLOYEE, Employee } from './constant';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'insurance-employee-management-detail',
  imports: [
    CommonModule,
    MatIcon,
    MatCard,
    MatStepperModule,
    NgOptimizedImage,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './employee-management-detail.component.html',
  styleUrl: './employee-management-detail.component.scss',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class EmployeeManagementDetailComponent implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  collectedData = COLLECTED_DATA_EMPLOYEE;
  selectedEmployee = signal<Employee | null>(null);

  get conditionOfShowImages() {
    return !!(
      (this.selectedEmployee()?.enum === 'INCOMPLETE' ||
        this.selectedEmployee()?.enum === 'REJECTED') &&
      this.selectedEmployee()!.step[2] &&
      this.selectedEmployee()!.step[3]
    );
  }

  get firstIncompleteImages() {
    switch (this.selectedEmployee()!.enum) {
      case 'INCOMPLETE':
        return this.selectedEmployee()!.step[2].image!;
      case 'REJECTED':
        return this.selectedEmployee()!.step[3].image!;
    }
    return;
  }

  get secondIncompleteImages() {
    switch (this.selectedEmployee()!.enum) {
      case 'INCOMPLETE':
        return this.selectedEmployee()!.step[2].image1!;
      case 'REJECTED':
        return this.selectedEmployee()!.step[3].image1!;
    }
    return;
  }

  get threeIncompleteImages() {
    switch (this.selectedEmployee()!.enum) {
      case 'INCOMPLETE':
        return this.selectedEmployee()!.step[2].image2!;
      case 'REJECTED':
        return this.selectedEmployee()!.step[3].image2!;
    }
    return;
  }

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
