import { Component, ViewChild, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface EmployerData {
  employer: string;
  lastUpdate: string;
  numberOfForms: number;
  totalEmployees: number;
  enrolledMembers: number;
  issues: number;
  kycStatus: 'Verified' | 'unverified' | 'Pending';
}
type View = 'upload' | 'employee';

@Component({
  selector: 'insurance-employee-feature-employer-management',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule
  ],
  templateUrl: './employee-feature-employer-management.component.html',
  styleUrl: './employee-feature-employer-management.component.scss',
})
export class EmployeeFeatureEmployerManagementComponent implements AfterViewInit {
  _view = signal<View>('employee');

  nextStep(){
    this._view.set('upload');
  }

  back(){
    this._view.set('employee');
  }


  displayedColumns: string[] = [
    'employer',
    'lastUpdate',
    'numberOfForms',
    'totalEmployees',
    'enrolledMembers',
    'issues',
    'kycStatus',
    'action'
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

  dataSource = new MatTableDataSource<EmployerData>(this.data);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
