import { Component, OnInit } from '@angular/core';
import { FetchRequestServiceService } from '../../services/fetch-request-service';
import { ProcurementRequest } from '../../interfaces/response.interface';
import { ErrorHandlerService } from '../../services/error-handler-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-specific-request',
  imports: [],
  templateUrl: './view-specific-request.component.html',
  styleUrl: './view-specific-request.component.css'
})
export class ViewSpecificRequestComponent  implements OnInit{
  data: ProcurementRequest | null = null

  constructor (private loadData: FetchRequestServiceService, private errorHandler: ErrorHandlerService, private route: ActivatedRoute) {}

  
  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadData.fetchSpecificProcurment(id).subscribe({
        next: (data) => {
          this.data = data;
        },
        error: (error) => {
          this.errorHandler.handleError(error);
        }
      });
    }
  }  


}
