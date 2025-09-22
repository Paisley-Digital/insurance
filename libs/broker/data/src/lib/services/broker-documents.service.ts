import { Injectable } from '@angular/core';
import { HttpBaseService } from '@shared-util-web-sdk';
import { Observable } from 'rxjs';
import { ApiResponse } from '@shared-util-web-sdk';

export interface PresignUrlRequest {
  employeeId: number;
  documentCategory: string;
  filename: string;
  contentType: string;
}

export interface PresignUrlResponse {
  uploadUrl: string;
  bucket: string;
  objectKey: string;
  expiresAt: string;
}

export interface DocumentUploadRecord {
  employeeId: number;
  documentCategory: string;
  originalFilename: string;
  contentType: string;
  sizeBytes: number;
}

export interface DocumentUploadResponse {
  documentId: number;
  bucket: string;
  objectKey: string;
}

export interface DocumentSubmission {
  employeeId: number;
  documentIds: number[];
}

export interface DocumentStatus {
  employeeId: number;
  status: string;
}

export interface EmployerDashboard {
  employerId: number;
  pending: number;
  verified: number;
  rejected: number;
}

@Injectable({
  providedIn: 'root',
})
export class BrokerDocumentsService extends HttpBaseService {
  private readonly BASE_PATH = '/api/v1/employee-documents';

  getPresignedUrl(
    request: PresignUrlRequest
  ): Observable<ApiResponse<PresignUrlResponse>> {
    return this.post<ApiResponse<PresignUrlResponse>>(
      `${this.BASE_PATH}/presign-url`,
      request
    );
  }

  recordUpload(
    record: DocumentUploadRecord
  ): Observable<ApiResponse<DocumentUploadResponse>> {
    return this.post<ApiResponse<DocumentUploadResponse>>(
      `${this.BASE_PATH}/record-upload`,
      record
    );
  }

  submitDocuments(
    submission: DocumentSubmission
  ): Observable<ApiResponse<{ submissionId: number }>> {
    return this.post<ApiResponse<{ submissionId: number }>>(
      `${this.BASE_PATH}/submit`,
      submission
    );
  }

  getEmployeeStatus(
    employeeId: number
  ): Observable<ApiResponse<DocumentStatus>> {
    return this.get<ApiResponse<DocumentStatus>>(
      `${this.BASE_PATH}/status/${employeeId}`
    );
  }

  getMyStatus(): Observable<ApiResponse<DocumentStatus>> {
    return this.get<ApiResponse<DocumentStatus>>(`${this.BASE_PATH}/me/status`);
  }

  getSubmissionDetails(submissionId: number): Observable<
    ApiResponse<{
      submissionId: number;
      status: string;
    }>
  > {
    return this.get<
      ApiResponse<{
        submissionId: number;
        status: string;
      }>
    >(`${this.BASE_PATH}/submission/${submissionId}`);
  }

  getEmployerDashboard(
    employerId: number
  ): Observable<ApiResponse<EmployerDashboard>> {
    return this.get<ApiResponse<EmployerDashboard>>(
      `${this.BASE_PATH}/employer-dashboard/${employerId}`
    );
  }

  approveDocument(documentId: number): Observable<
    ApiResponse<{
      documentId: number;
      status: string;
    }>
  > {
    return this.post<
      ApiResponse<{
        documentId: number;
        status: string;
      }>
    >(`${this.BASE_PATH}/documents/${documentId}/approve`, {});
  }

  rejectDocument(
    documentId: number,
    reason: string
  ): Observable<
    ApiResponse<{
      documentId: number;
      status: string;
      reason: string;
    }>
  > {
    return this.post<
      ApiResponse<{
        documentId: number;
        status: string;
        reason: string;
      }>
    >(`${this.BASE_PATH}/documents/${documentId}/reject`, { reason });
  }
}
