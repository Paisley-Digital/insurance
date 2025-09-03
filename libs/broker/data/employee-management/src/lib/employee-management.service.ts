import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROOT } from '@shared-util-web-sdk';

@Injectable({
  providedIn: 'root',
})
export class EmployeeManagementService {
  private http = inject(HttpClient);
  private apiRoot = inject(API_ROOT);

  removeEmployee(id: string) {
    return this.http.delete(
      `https://localhost:8080/employers/${id}/employees/${id}`
    );
  }

  sendInviteEmail(email: string) {
    return this.http.get(`https://localhost:8080/auth/check-email/${email}`);
  }
}
