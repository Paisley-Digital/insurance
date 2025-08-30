import { Component, inject, TemplateRef, viewChild } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { COLLECTED_DATA } from '@insurance-employee-data-dashboards';
import { MatButton, MatIconButton } from '@angular/material/button';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatTableModule,
} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
  MatDialogActions,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ErrorMessageComponent } from '@shared-ui-input-validator';
import {
  MatError,
  MatFormField,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { COLLECTED_DATA_EMPLOYEE, statusClasses } from './constant';

@Component({
  selector: 'insurance-employee-management',
  imports: [
    CommonModule,
    MatCard,
    MatButton,
    MatTableModule,
    MatIconModule,
    MatDialogActions,
    MatDialogModule,
    ErrorMessageComponent,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatSuffix,
    NgOptimizedImage,
    MatIconButton,
  ],
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.scss',
})
export class EmployeeManagementComponent {
  private formBuilder = inject(FormBuilder);
  protected readonly collectedData = COLLECTED_DATA_EMPLOYEE;
  readonly dialog = inject(MatDialog);

  invitationDialog = viewChild<TemplateRef<unknown>>('invitationDialog');
  successfulInviteDialog = viewChild<TemplateRef<unknown>>(
    'successfulInviteDialog'
  );

  invitationDialogRef?: MatDialogRef<unknown>;

  displayedColumnsCollection: string[] = [
    'fullName',
    'email',
    'registrationDate',
    'status',
    'arrow',
  ];

  invitationForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  openInvitationDialog() {
    this.invitationDialogRef = this.dialog.open(this.invitationDialog()!, {
      width: '460px',
    });
  }

  sendInvite() {
    if (this.invitationForm.invalid) return;
    this.invitationDialogRef?.close();
    this.dialog.open(this.successfulInviteDialog()!, {
      width: '460px',
    });
  }

  protected readonly statusClasses = statusClasses;
}
