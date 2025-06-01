import { Component, ViewChild, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
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
    MatTabsModule
  ],
  templateUrl: './employee-feature-employer-management.component.html',
  styleUrl: './employee-feature-employer-management.component.scss',
})
export class EmployeeFeatureEmployerManagementComponent implements AfterViewInit {
  _view = signal<View>('employee');

  nextStep(){
    this._view.set('upload');
  }

  backEntity(){
    this._view.set('upload');
  }

  back(){
    this._view.set('employee');
  }

  entity(){
    this._view.set('entity');
  }

  employee(){
    this._view.set('employeeKyc');
  }


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

  data: EmployerData[] = [
    {
      employer: 'Emaar',
      lastUpdate: '05/30/2025',
      numberOfForms: 119,
      totalEmployees: 10850,
      enrolledMembers: 7955,
      issues: 2895,
      kycStatus: 'Verified'
    },
    {
      employer: 'The Walt Disney',
      lastUpdate: '11/07/2024',
      numberOfForms: 120,
      totalEmployees: 3500,
      enrolledMembers: 2800,
      issues: 700,
      kycStatus: 'unverified'
    },
    {
      employer: 'IBM',
      lastUpdate: '03/04/2023',
      numberOfForms: 570,
      totalEmployees: 8870,
      enrolledMembers: 8300,
      issues: 570,
      kycStatus: 'Pending'
    },
    {
      employer: 'Pizza Hut',
      lastUpdate: '12/10/2023',
      numberOfForms: 70,
      totalEmployees: 2466,
      enrolledMembers: 2150,
      issues: 316,
      kycStatus: 'Verified'
    },
    {
      employer: 'Microsoft',
      lastUpdate: '01/12/2025',
      numberOfForms: 300,
      totalEmployees: 12000,
      enrolledMembers: 10000,
      issues: 2000,
      kycStatus: 'Verified'
    },
    {
      employer: 'Google',
      lastUpdate: '02/14/2025',
      numberOfForms: 450,
      totalEmployees: 15000,
      enrolledMembers: 12000,
      issues: 3000,
      kycStatus: 'Pending'
    }
  ];

  dataKyc: KycData[] = [
    {
      fullName: 'Borzo Barardari',
      dateOfBirth: '10/01/1982',
      nationality: 'Luxembourg',
      gender: 'M',
      enrolledSince: '18/05/2020',
      renevwalDate: '18/05/2025',
    },
    {
      fullName: 'Ehsan Baradari',
      dateOfBirth: '10/01/1982',
      nationality: 'Luxembourg',
      gender: 'M',
      enrolledSince: '01/08/2015',
      renevwalDate: '01/08/2015',
    },
    {
      fullName: 'Albert Flores',
      dateOfBirth: '9/07/8/2016',
      nationality: 'Greensboro (NC)',
      gender: 'M',
      enrolledSince: '15/07/2017',
      renevwalDate: '15/07/2017',
    },
    {
      fullName: 'Annette Black',
      dateOfBirth: '10/28/2012',
      nationality: 'Hagen',
      gender: 'M',
      enrolledSince: '01/10/2019',
      renevwalDate: '01/10/2019',
    }
  ];

  dataKycExpire: KycDataExpire[] = [
    {
      fullName: 'Bahador Barardari',
      dateOfBirth: '10/01/1982',
      nationality: 'Luxembourg',
      gender: 'M',
      remainingValidity:'Residency Visa (Expiring in 10 days)',
    },
    {
      fullName: 'Ehsan Baradari',
      dateOfBirth: '10/01/1982',
      nationality: 'Luxembourg',
      gender: 'M',
      remainingValidity:'Passport (Expiring in 30 days)',
    },
    {
      fullName: 'Albert Flores',
      dateOfBirth: '90/18/2016', 
      nationality: 'Greensboro (NC)',
      gender: 'F',              
      remainingValidity:'Emirates ID (Expiring in 120 days)',
    },
    {
      fullName: 'Adil Tom',
      dateOfBirth: '15/28/2008',
      nationality: 'Dubai',
      gender: 'M',
      remainingValidity:'Passport (Expiring in 30 days)',
    },
    {
      fullName: 'Annette Black',
      dateOfBirth: '10/28/2012',
      nationality: 'Hagen',
      gender: 'M',
      remainingValidity:'Residency Visa (Expiring in 10 days)',
    }
  ];

  dataKycRejected: KycDataRejected[] = [
    {
      fullName: 'Babak Barardari',
      dateOfBirth: '10/01/1982',
      nationality: 'Luxembourg',
      gender: 'M',
      rejectionReason:'Residency Visa was unclear',
    },
    {
      fullName: 'Ehsan Baradari',
      dateOfBirth: '10/01/1982',
      nationality: 'Luxembourg',
      gender: 'M',
      rejectionReason:'Passport was unclear',
    },
    {
      fullName: 'Albert Flores',
      dateOfBirth: '90/18/2016', 
      nationality: 'Greensboro (NC)',
      gender: 'F',              
      rejectionReason:'Emirates ID  unclear',
    },
    {
      fullName: 'Adil Tom',
      dateOfBirth: '15/28/2008',
      nationality: 'Dubai',
      gender: 'M',
      rejectionReason:'Passport was unclear',
    },
    {
      fullName: 'Annette Black',
      dateOfBirth: '10/28/2012',
      nationality: 'Hagen',
      gender: 'M',
      rejectionReason:'Residency Visa was unclear',
    }
  ];

  eneityData: EntityData[] = [
    {
      person: 'John Doe',
      pep: 'Yes',
      riskLevel: 'High',
      documentType: 'Passport',
      submissionData: '22/01/2024',
      action: 'View / Review',
      kycStatus: 'Compliant'
    },
    {
      person: 'Omar AlSaeed',
      pep: 'No',
      riskLevel: 'Low',
      documentType: 'National ID',
      submissionData: '15/01/2024',
      action: 'View',
      kycStatus: 'Non-Compliant'
    },
    {
      person: 'Ahmed Nasr',
      pep: 'No',
      riskLevel: 'Medium',
      documentType: 'Driving License',
      submissionData: '20/01/2024',
      action: 'Review',
      kycStatus: 'Pending'
    },
    {
      person: 'Ferhad Abdi',
      pep: 'Yes',
      riskLevel: 'Low',
      documentType: 'National ID',
      submissionData: '06/01/2024',
      action: 'View',
      kycStatus: 'Pending'
    },
    {
      person: 'Fatima Akhalid',
      pep: 'Yes',
      riskLevel: 'High',
      documentType: 'Passport',
      submissionData: '10/01/2024',
      action: 'Review',
      kycStatus: 'Compliant'
    }
  ];
  

  dataSource = new MatTableDataSource<EmployerData>(this.data);

  entityDataSource = new MatTableDataSource<EntityData>(this.eneityData);

  kycDataSource = new MatTableDataSource<KycData>(this.dataKyc);

  kycExpireDataSource = new MatTableDataSource<KycDataExpire>(this.dataKycExpire);

  kycRejectedDataSource = new MatTableDataSource<KycDataRejected>(this.dataKycRejected);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
