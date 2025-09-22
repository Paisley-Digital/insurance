import { Injectable } from '@angular/core';
import { HttpBaseService } from '@shared-util-web-sdk';
import { Observable } from 'rxjs';
import { ApiResponse } from '@shared-util-web-sdk';

export interface CustomerDashboard {
  totalEmployers: number;
  activeEmployers: number;
  totalEmployees: number;
  pendingKyc: number;
  completedKyc: number;
}

export interface Employer {
  id: number;
  name: string;
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
}

export interface KycStatus {
  pending: number;
  verified: number;
  rejected: number;
}

@Injectable({
  providedIn: 'root',
})
export class CustomerManagementService extends HttpBaseService {
  private readonly BASE_PATH = '/api/v1/company';

  checkHealth(): Observable<ApiResponse<string>> {
    return this.get<ApiResponse<string>>(`${this.BASE_PATH}/health`);
  }

  getDashboard(): Observable<ApiResponse<CustomerDashboard>> {
    return this.get<ApiResponse<CustomerDashboard>>(
      `${this.BASE_PATH}/dashboard`
    );
  }

  listEmployers(): Observable<ApiResponse<Employer[]>> {
    return this.get<ApiResponse<Employer[]>>(`${this.BASE_PATH}/employers`);
  }

  getEmployer(employerId: number): Observable<ApiResponse<Employer>> {
    return this.get<ApiResponse<Employer>>(
      `${this.BASE_PATH}/employers/${employerId}`
    );
  }

  getEmployerEmployees(
    employerId: number
  ): Observable<ApiResponse<Employee[]>> {
    return this.get<ApiResponse<Employee[]>>(
      `${this.BASE_PATH}/employers/${employerId}/employees`
    );
  }

  getEmployee(employeeId: number): Observable<ApiResponse<Employee>> {
    return this.get<ApiResponse<Employee>>(
      `${this.BASE_PATH}/employees/${employeeId}`
    );
  }

  getEmployerKycStatus(employerId: number): Observable<ApiResponse<KycStatus>> {
    return this.get<ApiResponse<KycStatus>>(
      `${this.BASE_PATH}/employers/${employerId}/kyc-status`
    );
  }
}
