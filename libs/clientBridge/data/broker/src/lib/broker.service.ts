import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrokerResponse } from './broker.model';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {
  private http = inject(HttpClient)
  private baseUrl = 'http://93.127.180.228'

  fetchAll(){
     return this.http.get<BrokerResponse[]>(`${this.baseUrl}/files/api/v1/files/1/all`)
  }
}
