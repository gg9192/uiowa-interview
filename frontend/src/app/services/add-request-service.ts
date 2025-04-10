import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface postdata {
  firstName: string | null,
  lastName: string | null,
  amount: string | null,
  purchaseDate: string | null,
  file: File
}

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
    formData.append('file', data.file); 
    return this.http.post("http://localhost:3000/upload", data);
  }

}
