import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, from, switchMap } from 'rxjs';
import { AiPayload, AiResponse, FileResponse } from './employee-data-dashboard.model';

@Injectable({
  providedIn: 'root',
})
  export class FileUploadService {
  private apiUrl =
    'https://insurancebase.paisley.monster/files/api/v1/files/1/upload';

  constructor(private http: HttpClient) {}

  uploadFile(file: File) {
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });

    const formData = new FormData();
    formData.append('files', file);

    return this.http.post<FileResponse[]>(this.apiUrl, formData, { headers });
  }

  private apiUrlGpt = 'https://api.openai.com/v1/chat/completions';
  private apiKey =
    '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';


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
