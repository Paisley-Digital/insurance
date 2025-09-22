import { Injectable } from '@angular/core';
import { HttpBaseService } from '@shared-util-web-sdk';
import { Observable } from 'rxjs';
import { ApiResponse } from '@shared-util-web-sdk';

export interface EkycTemplate {
  id: number;
  displayName: string;
  enabled: boolean;
}

export interface EkycAssignment {
  assignmentId: number;
}

export interface PresignUploadRequest {
  employerId: number;
  assignmentId: number;
  category: string;
  fileName: string;
  contentType: string;
  sizeBytes: number;
  email: string;
}

export interface PresignUploadResponse {
  bucket: string;
  objectKey: string;
  url: string;
  expiresInSeconds: number;
}

export interface EkycSubmission {
  assignmentId: number;
  step1CompanyInfoJson: string;
  step2ShareholdersJson: string;
  step3BoardJson: string;
  step4PepsJson: string;
  step5FundsJson: string;
  step6DeclarationJson: string;
  tradeLicenseFileId: number;
  fundsDocFileId: number;
  companyStampFileId: number;
  signatureFileId: number;
}

@Injectable({
  providedIn: 'root'
})
export class BrokerEkycService extends HttpBaseService {
  private readonly BASE_PATH = '/api/v1/ekyc';

  checkHealth(): Observable<ApiResponse<string>> {
    return this.get<ApiResponse<string>>(`${this.BASE_PATH}/health`);
  }

  listTemplates(): Observable<ApiResponse<EkycTemplate[]>> {
    return this.get<ApiResponse<EkycTemplate[]>>(`${this.BASE_PATH}/templates`);
  }

  createAssignment(companyId: number, data: {
    templateId: number;
    employerId: number;
    employeeIds: number[];
  }): Observable<ApiResponse<EkycAssignment>> {
    return this.post<ApiResponse<EkycAssignment>>(
      `${this.BASE_PATH}/companies/${companyId}/assignments`,
      data
    );
  }

  getPresignedUploadUrl(request: PresignUploadRequest): Observable<ApiResponse<PresignUploadResponse>> {
    return this.post<ApiResponse<PresignUploadResponse>>(`${this.BASE_PATH}/submissions/presign`, request);
  }

  submitEkyc(submission: EkycSubmission): Observable<ApiResponse<{
    submissionId: number;
    status: string;
    message: string;
  }>> {
    return this.post<ApiResponse<{
      submissionId: number;
      status: string;
      message: string;
    }>>(`${this.BASE_PATH}/submissions`, submission);
  }

  getFileDownloadUrl(fileId: string): Observable<ApiResponse<{
    downloadUrl: string;
    expiresIn: number;
  }>> {
    return this.get<ApiResponse<{
      downloadUrl: string;
      expiresIn: number;
    }>>(`${this.BASE_PATH}/submissions/files/${fileId}/download`);
  }

  getSubmission(assignmentId: number): Observable<ApiResponse<{
    assignmentId: number;
    documents: Array<{
      id: number;
      type: string;
      status: string;
    }>;
  }>> {
    return this.get<ApiResponse<{
      assignmentId: number;
      documents: Array<{
        id: number;
        type: string;
        status: string;
      }>;
    }>>(`${this.BASE_PATH}/submissions/${assignmentId}`);
  }
}
