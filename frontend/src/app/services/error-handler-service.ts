import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {

  constructor(private router: Router) {
  }

  // handles api errors
  handleError(error: HttpErrorResponse): void {
    console.log(`error when calling to endpoint ${error.url}. Status: ${error.status}, Error: ${error.message}`)
    if (error.status === 500) {
        this.router.navigate(['/500'])
    }
    if (error.status === 404) {
        this.router.navigate(['/404'])
    }
  }
}
