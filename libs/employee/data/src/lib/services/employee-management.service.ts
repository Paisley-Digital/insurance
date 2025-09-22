import { Injectable } from '@angular/core';
import { HttpBaseService } from '../../../../../shared/util/web-sdk/src/lib/services/http-base.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../../../shared/util/web-sdk/src/lib/models/api-response.model';

export interface EmployeeDashboard {
  employerId: number;
  totalEmployees: number;
  activeEmployees: number;
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeManagementService extends HttpBaseService {
  private readonly BASE_PATH = '/api/v1/employer';

  checkHealth(): Observable<ApiResponse<string>> {
    return this.get<ApiResponse<string>>(`${this.BASE_PATH}/health`);
  }

  getDashboard(): Observable<ApiResponse<EmployeeDashboard>> {
    return this.get<ApiResponse<EmployeeDashboard>>(`${this.BASE_PATH}/dashboard`);
  }

  createEmployee(data: Partial<Employee>): Observable<ApiResponse<Employee>> {
    return this.post<ApiResponse<Employee>>(`${this.BASE_PATH}/employees`, data);
  }

  listEmployees(): Observable<ApiResponse<Employee[]>> {
    return this.get<ApiResponse<Employee[]>>(`${this.BASE_PATH}/employees`);
  }

  getEmployee(id: number): Observable<ApiResponse<Employee>> {
    return this.get<ApiResponse<Employee>>(`${this.BASE_PATH}/employees/${id}`);
  }

  updateEmployee(id: number, data: Partial<Employee>): Observable<ApiResponse<Employee>> {
    return this.put<ApiResponse<Employee>>(`${this.BASE_PATH}/employees/${id}`, data);
  }

  activateEmployee(id: number): Observable<ApiResponse<Employee>> {
    return this.post<ApiResponse<Employee>>(`${this.BASE_PATH}/employees/${id}/activate`, {});
  }

  deactivateEmployee(id: number): Observable<ApiResponse<Employee>> {
    return this.post<ApiResponse<Employee>>(`${this.BASE_PATH}/employees/${id}/deactivate`, {});
  }

  deleteEmployee(id: number): Observable<ApiResponse<{ id: number; deleted: boolean }>> {
    return this.delete<ApiResponse<{ id: number; deleted: boolean }>>(`${this.BASE_PATH}/employees/${id}`);
  }

  getEmployeesCount(): Observable<ApiResponse<{ count: number }>> {
    return this.get<ApiResponse<{ count: number }>>(`${this.BASE_PATH}/employees/count`);
  }
}