import { inject, Injectable } from '@angular/core';
import {
  AiPayload,
  AiResponse,
  FileResponse,
} from '@insurance-employee-data-dashboards';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ROOT } from '@shared-util-web-sdk';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDataDashboardService {
  private http = inject(HttpClient);
  private apiRoot = inject(API_ROOT);

  uploadFile(files: File[]) {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });

    const formData = new FormData();

    files.forEach((file) => {
      formData.append('files', file);
    });

    return this.http.post<FileResponse[]>(
      `${this.apiRoot}/files/api/v1/files/1/upload`,
      formData,
      { headers }
    );
  }

  createDocument(
    companyId: string,
    documentData: {
      firstName: string;
      surname: string;
      dateOfBirth: string;
      sex: string;
      nationality: string;
      emirateOfVisaIssue: string;
      nationalCode: string;
      contactNumber: string;
    }
  ): Observable<any> {
    const apiUrl = `${this.apiRoot}/documents/api/v1/companies/${companyId}/documents`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(apiUrl, documentData, { headers });
  }

  postAiService(payload: AiPayload) {
    return this.http.post<AiResponse>(
      `${this.apiRoot}/api/ai_service/ocr`,
      payload
    );
  }
}
