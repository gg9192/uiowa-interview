import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProcurementRequest } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class FetchRequestServiceService {

  constructor(private http: HttpClient) { }

  fetchSpecificProcurment(id: number): Observable<ProcurementRequest> {
    return this.http.get<ProcurementRequest>(`/api/getReceipt/${id}`)
  }
}
