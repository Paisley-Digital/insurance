import { inject, Injectable } from '@angular/core';
import {
  AiPayload,
  AiResponse,
  FileResponse,
} from '@insurance-employee-data-dashboards';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDataDashboardService {
  private http = inject(HttpClient);
  private apiUrl =
    'https://insurancebase.paisley.monster/files/api/v1/files/1/upload';

  uploadFile(file: File) {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });

    const formData = new FormData();
    formData.append('files', file);

    return this.http.post<FileResponse[]>(this.apiUrl, formData, { headers });
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
    const apiUrl = `https://insurancebase.paisley.monster/documents/api/v1/companies/${companyId}/documents`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(apiUrl, documentData, { headers });
  }

  postAiService(payload: AiPayload) {
    return this.http.post<AiResponse>(
      'https://insurancebase.paisley.monster/api/ai_service/ocr',
      payload
    );
  }
}
