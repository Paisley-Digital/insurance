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
  private aiKey = inject(AI_KEY);

  fetchAll() {
    return this.http.get<BrokerResponse[]>(
      `${this.baseUrl}/files/api/v1/files/1/all`
    );
  }

  postAiService(payload: AiPayload) {
    const headers = new HttpHeaders({ Authorization: `Bearer ${this.aiKey}` });
    return this.http.post<AiResponse>(
      'https://api.openai.com/v1/chat/completions',
      payload,
      {
        headers,
      }
    );
  }
}
