import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormField } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'insurance-employee-feature-e-kyc-management-schedule',
  imports: [
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormField,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    MatInput,
    MatSelectModule,
    MatButton,
  ],
  templateUrl: './employee-feature-eKYC-management-schedule.component.html',
  styleUrl: './employee-feature-eKYC-management-schedule.component.scss',
})
export class EmployeeFeatureEKYCManagementScheduleComponent {
  private formBuilder = inject(FormBuilder);
  private _formBuilder = inject(FormBuilder);
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  noteControl = new FormControl();
  isLinear = false;
  repeatOptions = [
    { value: 'none', label: 'Does not repeat' },
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Annually on April 3' },
    { value: 'expiry', label: 'One Month Before Expiry' },
    { value: 'custom', label: 'Custom' },
  ];
}
