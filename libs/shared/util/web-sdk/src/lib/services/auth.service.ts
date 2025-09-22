import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from './http-base.service';
import { ApiResponse } from '../models/api-response.model';

export interface OtpRequest {
  email: string;
}

export interface OtpVerifyRequest {
  email: string;
  otp: string;
}

export interface AuthResponse {
  token: string;
  user: {
    email: string;
    role: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpBaseService {
  private readonly BASE_PATH = '/api/v1/auth-clean';

  generateOtp(request: OtpRequest): Observable<ApiResponse<{ email: string }>> {
    return this.post<ApiResponse<{ email: string }>>(`${this.BASE_PATH}/otp`, request);
  }

  verifyOtp(request: OtpVerifyRequest): Observable<ApiResponse<AuthResponse>> {
    return this.post<ApiResponse<AuthResponse>>(`${this.BASE_PATH}/verify`, request);
  }

  resendOtp(request: OtpRequest): Observable<ApiResponse<{ email: string }>> {
    return this.post<ApiResponse<{ email: string }>>(`${this.BASE_PATH}/resend`, request);
  }

  checkEmailExists(email: string): Observable<ApiResponse<{ exists: boolean }>> {
    return this.get<ApiResponse<{ exists: boolean }>>(`${this.BASE_PATH}/email/${email}/exists`);
  }

  checkHealth(): Observable<ApiResponse<string>> {
    return this.get<ApiResponse<string>>(`${this.BASE_PATH}/health`);
  }
}
