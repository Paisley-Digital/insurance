import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ROOT } from '../injection-token';

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {
  constructor(
    private http: HttpClient,
    @Inject(API_ROOT) private apiRoot: string
  ) {}

  private createHeaders(correlationId?: string): HttpHeaders {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    
    if (correlationId) {
      headers = headers.set('X-Correlation-Id', correlationId);
    }

    return headers;
  }

  protected get<T>(path: string, params?: HttpParams, correlationId?: string): Observable<T> {
    return this.http.get<T>(`${this.apiRoot}${path}`, {
      headers: this.createHeaders(correlationId),
      params
    });
  }

  protected post<T>(path: string, body: any, correlationId?: string): Observable<T> {
    return this.http.post<T>(`${this.apiRoot}${path}`, body, {
      headers: this.createHeaders(correlationId)
    });
  }

  protected put<T>(path: string, body: any, correlationId?: string): Observable<T> {
    return this.http.put<T>(`${this.apiRoot}${path}`, body, {
      headers: this.createHeaders(correlationId)
    });
  }

  protected delete<T>(path: string, correlationId?: string): Observable<T> {
    return this.http.delete<T>(`${this.apiRoot}${path}`, {
      headers: this.createHeaders(correlationId)
    });
  }
}
