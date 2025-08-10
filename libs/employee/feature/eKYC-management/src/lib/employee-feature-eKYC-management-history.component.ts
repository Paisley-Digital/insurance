import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'insurance-employee-feature-e-kyc-management-history',
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    MatFormField,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    MatInput,
    MatSelectModule,
    MatButton,
  ],
  templateUrl: './employee-feature-eKYC-management-history.component.html',
  styleUrl: './employee-feature-eKYC-management-history.component.scss',
})
export class EmployeeFeatureEKYCManagementHistoryComponent {
  readonly dialog = inject(MatDialog);
  @ViewChild('filterDialog') filterDialog!: TemplateRef<unknown>;

  displayedColumns: string[] = [
    'employer',
    'template',
    'expiry',
    'submitted',
    'status',
  ];
  dataSource = [
    {
      employer: 'Emaar',
      template: 'Group Policy',
      expiry: 'May 12',
      submitted: '18/05/2024',
      status: 'Verified',
    },
    {
      employer: 'The Walt Disney',
      template: 'Group Policy',
      expiry: 'Jun 08',
      submitted: '01/08/2024',
      status: 'Rejected',
    },
    {
      employer: 'IBM',
      template: 'Group Policy',
      expiry: 'May 10',
      submitted: '15/07/2024',
      status: 'Pending',
    },
    {
      employer: 'Pizza Hut',
      template: 'Group Policy',
      expiry: 'Apr 12',
      submitted: '01/10/2024',
      status: 'Verified',
    },
  ];

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'verified':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  }

  openDialog() {
    this.dialog.open(this.filterDialog, {
      width: '480px',
    });
  }
}
