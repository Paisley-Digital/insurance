import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormField } from '@angular/material/form-field';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { ErrorMessageComponent } from '@shared-ui-input-validator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { RouterLink } from '@angular/router';

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
    ErrorMessageComponent,
    RouterLink,
  ],
  templateUrl: './employee-feature-eKYC-management-schedule.component.html',
  styleUrl: './employee-feature-eKYC-management-schedule.component.scss',
})
export class EmployeeFeatureEKYCManagementScheduleComponent implements OnInit {
  private _formBuilder = inject(FormBuilder);
  announcer = inject(LiveAnnouncer);

  firstFormGroup = this._formBuilder.group({
    kycTemplate: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    emails: this._formBuilder.array<FormControl>([]),
    notificationType: ['', Validators.required],
    sendOn: ['', Validators.required],
    repeat: ['', Validators.required],
    note: ['', Validators.required],
  });
  emailInput = new FormControl('', [Validators.email]);
  repeatOptions = [
    { value: 'none', label: 'Does not repeat' },
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Annually on April 3' },
    { value: 'expiry', label: 'One Month Before Expiry' },
    { value: 'custom', label: 'Custom' },
  ];

  ngOnInit(): void {
    console.log('s');
  }

  goToNextStep(stepper: MatStepper): void {
    if (this.firstFormGroup.valid) {
      stepper.next();
    }
  }

  readonly keywords = signal(['']);
  readonly formControl = new FormControl(['angular']);

  get emails() {
    return this.secondFormGroup.get('emails') as FormArray;
  }

  addEmail(event: MatChipInputEvent) {
    const value = (event.value || '').trim();
    if (!value) {
      event.chipInput?.clear();
      return;
    }

    this.emailInput.setValue(value);
    if (this.emailInput.invalid) {
      this.emailInput.markAsTouched();
      this.announcer.announce(`invalid email: ${value}`);
      event.chipInput?.clear();
      return;
    }

    this.emails.push(new FormControl(value, [Validators.email]));
    this.announcer.announce(`added ${value}`);

    this.emailInput.reset();
    event.chipInput?.clear();
  }

  removeEmail(index: number) {
    const removed = this.emails.at(index).value;
    this.emails.removeAt(index);
    this.announcer.announce(`removed ${removed}`);
  }
}
