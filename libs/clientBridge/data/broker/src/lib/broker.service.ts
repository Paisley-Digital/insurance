import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AiPayload, AiResponse, BrokerResponse } from './broker.model';
import { AI_KEY } from '@insurance-shared-util-web-sdk';

@Injectable({
  providedIn: 'root',
})
export class BrokerService {
  private http = inject(HttpClient);
  private baseUrl = 'https://insurancebase.paisley.monster';

  fetchAll() {
    return this.http.get<BrokerResponse[]>(
      `${this.baseUrl}/files/api/v1/files/1/all`
    );
  }
}
