import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { postdata } from '../interfaces/request.interface';


@Injectable({
  providedIn: 'root'
})
export class AddRequestServiceService {

  constructor(private http: HttpClient) { }

  createRequest(data: postdata) {
    const formData = new FormData();

    formData.append('firstName', data.firstName || '');
    formData.append('lastName', data.lastName || '');
    formData.append('amount', data.amount || '');
    formData.append('purchaseDate', data.purchaseDate || '');
    formData.append('description', data.description || '');
    formData.append('file', data.file); 
    return this.http.post("http://localhost:4200/api/upload", formData);
  }

}
