import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RequestTableService } from '../../services/request-table-service';
import { debounceTime } from 'rxjs';
import { distinctUntilChanged } from 'rxjs';
import { ErrorHandlerService } from '../../services/error-handler-service';
import { Router } from '@angular/router';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-view-requests-page',
  imports: [MatPaginatorModule, MatTableModule, TableComponent],
  templateUrl: './view-requests-page.component.html',
  styleUrl: './view-requests-page.component.css'
})
export class ViewRequestsPage  {
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfPurchase', 'amount']
  dataSource = new MatTableDataSource<any>([]);
  pageno = 1
  totalElements = 0
  pagesize = 0

  onRowClick(element: any) {
    const id = element.id
    this.router.navigate([`/view/${id}`])
  }

  constructor(private fetchService: RequestTableService, private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }


  


}

