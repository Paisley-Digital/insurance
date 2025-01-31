import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AiPayload,
  AiResponse,
  BrokerResponse,
  DocumentResponse,
} from './broker.model';

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

  postAiService(payload: AiPayload) {
    return this.http.post<AiResponse>(
      'https://insurancebase.paisley.monster/api/ai_service/ocr',
      payload
    );
  }

  fetchAllDocument() {
    return this.http.get<DocumentResponse[]>(
      `https://insurancebase.paisley.monster/documents/api/v1/companies/1/files`
    );
  }
}
