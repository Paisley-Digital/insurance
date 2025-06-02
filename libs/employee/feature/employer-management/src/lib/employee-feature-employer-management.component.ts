import { Component, ViewChild, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import {
  EMPLOYEE_KYC_DATA,
  EMPLOYEE_KYC_EXPIRE,
  EMPLOYEE_KYC_REJECTED,
  EMPLOYER_DATA,
  ENTITY_DATA,
} from '@insurance-employee-data-dashboards';

interface EmployerData {
  employer: string;
  lastUpdate: string;
  numberOfForms: number;
  totalEmployees: number;
  enrolledMembers: number;
  issues: number;
  kycStatus: 'Verified' | 'unverified' | 'Pending';
}

interface KycData {
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
  enrolledSince: string;
  renevwalDate: string;
}

interface KycDataExpire {
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
  remainingValidity: string;
}

interface KycDataRejected {
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
  rejectionReason: string;
}

type RiskLevel = 'Low' | 'Medium' | 'High';
type DocumentType = 'Passport' | 'National ID' | 'Driving License';
type ActionType = 'View' | 'Review' | 'View / Review';
type KYCStatus = 'Compliant' | 'Non-Compliant' | 'Pending';

interface EntityData {
  person: string;
  pep: 'Yes' | 'No';
  riskLevel: RiskLevel;
  documentType: DocumentType;
  submissionData: string;
  action: ActionType;
  kycStatus: KYCStatus;
}

type View = 'upload' | 'employee' | 'entity' | 'employeeKyc';

@Component({
  selector: 'insurance-employee-feature-employer-management',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatTabsModule,
  ],
  templateUrl: './employee-feature-employer-management.component.html',
  styleUrl: './employee-feature-employer-management.component.scss',
})
export class EmployeeFeatureEmployerManagementComponent
  implements AfterViewInit
{
  data: EmployerData[] = EMPLOYER_DATA;
  dataKyc: KycData[] = EMPLOYEE_KYC_DATA;
  dataKycExpire: KycDataExpire[] = EMPLOYEE_KYC_EXPIRE;
  dataKycRejected: KycDataRejected[] = EMPLOYEE_KYC_REJECTED;
  eneityData: EntityData[] = ENTITY_DATA;

  _view = signal<View>('employee');

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'employer',
    'lastUpdate',
    'numberOfForms',
    'totalEmployees',
    'enrolledMembers',
    'issues',
    'kycStatus',
    'action',
  ];

  displayedColumnsKyc: string[] = [
    'fullName',
    'dateOfBirth',
    'nationality',
    'gender',
    'enrolledSince',
    'renevwalDate',
    'action',
  ];

  displayedColumnsKycExpire: string[] = [
    'fullName',
    'dateOfBirth',
    'nationality',
    'gender',
    'remainingValidity',
    'action',
  ];

  displayedColumnsKycRejected: string[] = [
    'fullName',
    'dateOfBirth',
    'nationality',
    'gender',
    'rejectionReason',
    'action',
  ];

  dataSource = new MatTableDataSource<EmployerData>(this.data);
  entityDataSource = new MatTableDataSource<EntityData>(this.eneityData);
  kycDataSource = new MatTableDataSource<KycData>(this.dataKyc);
  kycExpireDataSource = new MatTableDataSource<KycDataExpire>(
    this.dataKycExpire
  );

  kycRejectedDataSource = new MatTableDataSource<KycDataRejected>(
    this.dataKycRejected
  );

  nextStep() {
    this._view.set('upload');
  }

  backEntity() {
    this._view.set('upload');
  }

  back() {
    this._view.set('employee');
  }

  entity() {
    this._view.set('entity');
  }

  employee() {
    this._view.set('employeeKyc');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
