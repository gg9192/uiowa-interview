import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginationRequest } from '../interfaces/response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestTableService {

  constructor(private http: HttpClient) { }

  getPaginatedData(pageNo: number): Observable<PaginationRequest> {
    return this.http.get<PaginationRequest>(`http://localhost:4200/api/getPaginated/requests?pageno=${pageNo}`);
  }
}
