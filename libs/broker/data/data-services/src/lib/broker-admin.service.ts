import { Injectable } from '@angular/core';
import { HttpBaseService } from '@shared-util-web-sdk';
import { Observable } from 'rxjs';
import { ApiResponse } from '@shared-util-web-sdk';

export interface SuperAdmin {
  id: number;
  email: string;
  firstName?: string;
  lastName?: string;
}

export interface InsuranceCompany {
  id: number;
  email: string;
  companyName: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  status?: string;
}

export interface AdminDashboard {
  totalCompanies: number;
  totalSuperAdmins: number;
  systemStatus: string;
}

@Injectable({
  providedIn: 'root'
})
export class BrokerAdminService extends HttpBaseService {
  private readonly BASE_PATH = '/api/v1/admin';

  createSuperAdmin(data: Partial<SuperAdmin>): Observable<ApiResponse<SuperAdmin>> {
    return this.post<ApiResponse<SuperAdmin>>(`${this.BASE_PATH}/super-admins`, data);
  }

  listSuperAdmins(): Observable<ApiResponse<SuperAdmin[]>> {
    return this.get<ApiResponse<SuperAdmin[]>>(`${this.BASE_PATH}/super-admins`);
  }

  getSuperAdmin(id: number): Observable<ApiResponse<SuperAdmin>> {
    return this.get<ApiResponse<SuperAdmin>>(`${this.BASE_PATH}/super-admins/${id}`);
  }

  createInsuranceCompany(data: Partial<InsuranceCompany>): Observable<ApiResponse<InsuranceCompany>> {
    return this.post<ApiResponse<InsuranceCompany>>(`${this.BASE_PATH}/insurance-companies`, data);
  }

  listInsuranceCompanies(): Observable<ApiResponse<InsuranceCompany[]>> {
    return this.get<ApiResponse<InsuranceCompany[]>>(`${this.BASE_PATH}/insurance-companies`);
  }

  countInsuranceCompanies(): Observable<ApiResponse<{ count: number }>> {
    return this.get<ApiResponse<{ count: number }>>(`${this.BASE_PATH}/insurance-companies/count`);
  }

  getInsuranceCompany(id: number): Observable<ApiResponse<InsuranceCompany>> {
    return this.get<ApiResponse<InsuranceCompany>>(`${this.BASE_PATH}/insurance-companies/${id}`);
  }

  updateInsuranceCompany(id: number, data: Partial<InsuranceCompany>): Observable<ApiResponse<InsuranceCompany>> {
    return this.put<ApiResponse<InsuranceCompany>>(`${this.BASE_PATH}/insurance-companies/${id}`, data);
  }

  activateCompany(id: number): Observable<ApiResponse<InsuranceCompany>> {
    return this.post<ApiResponse<InsuranceCompany>>(`${this.BASE_PATH}/insurance-companies/${id}/activate`, {});
  }

  deactivateCompany(id: number): Observable<ApiResponse<InsuranceCompany>> {
    return this.post<ApiResponse<InsuranceCompany>>(`${this.BASE_PATH}/insurance-companies/${id}/deactivate`, {});
  }

  deleteCompany(id: number): Observable<ApiResponse<{ id: number; deleted: boolean }>> {
    return this.delete<ApiResponse<{ id: number; deleted: boolean }>>(`${this.BASE_PATH}/insurance-companies/${id}`);
  }

  getDashboard(): Observable<ApiResponse<AdminDashboard>> {
    return this.get<ApiResponse<AdminDashboard>>(`${this.BASE_PATH}/dashboard`);
  }

  getAllCompanies(): Observable<ApiResponse<InsuranceCompany[]>> {
    return this.get<ApiResponse<InsuranceCompany[]>>(`${this.BASE_PATH}/companies`);
  }
}
