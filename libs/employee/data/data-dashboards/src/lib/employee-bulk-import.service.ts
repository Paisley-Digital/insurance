import { Injectable } from '@angular/core';
import { HttpBaseService } from '@shared-util-web-sdk';
import { Observable } from 'rxjs';
import { ApiResponse } from '@shared-util-web-sdk';

export interface BulkImportResponse {
  importId: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeBulkImportService extends HttpBaseService {
  private readonly BASE_PATH = '/api/v1/employer-bulk-import';

  checkHealth(): Observable<ApiResponse<string>> {
    return this.get<ApiResponse<string>>(`${this.BASE_PATH}/health`);
  }

  getTemplate(): Observable<any> {
    return this.get(`${this.BASE_PATH}/template`);
  }

  uploadFile(
    file: File,
    employerId: number,
    description: string
  ): Observable<ApiResponse<BulkImportResponse>> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('employerId', employerId.toString());
    formData.append('description', description);

    return this.post<ApiResponse<BulkImportResponse>>(
      `${this.BASE_PATH}/upload`,
      formData
    );
  }

  getImportStatus(
    importId: string
  ): Observable<ApiResponse<BulkImportResponse>> {
    return this.get<ApiResponse<BulkImportResponse>>(
      `${this.BASE_PATH}/status/${importId}`
    );
  }
}
