import { Component, ViewChild, Input, OnInit, AfterViewInit } from '@angular/core';
import { RequestTableService } from '../../services/request-table-service';
import { debounceTime } from 'rxjs';
import { distinctUntilChanged } from 'rxjs';
import { ErrorHandlerService } from '../../services/error-handler-service';
import { Router } from '@angular/router';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { ProcurementRequest } from '../../interfaces/response.interface';

@Component({
  selector: 'app-table',
  imports: [MatPaginatorModule, MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfPurchase', 'amount']
  
  dataSource: MatTableDataSource<ProcurementRequest> = new MatTableDataSource()
  totalElements = 0
  pagesize = 0
  pageno = 0
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor (private fetchService: RequestTableService, private errorHandler: ErrorHandlerService,private router: Router) {}

  onRowClick(element: any) {
    const id = element.id
    this.router.navigate([`/view/${id}`])
  }



  refetch() {
    this.fetchService.getPaginatedData(this.pageno).subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data.items)
        this.totalElements = data.totalItems;
      },
      error: (error) => {
        this.errorHandler.handleError(error)
      }
    })
  }

  ngAfterViewInit(): void {
    this.refetch()

    this.paginator.page.pipe(
      debounceTime(100), // Wait for 300ms after the last page change
      distinctUntilChanged((prev, curr) => prev.pageIndex === curr.pageIndex && prev.pageSize === curr.pageSize) // Only emit if the page or page size has changed
    ).subscribe((page) => {
      this.pageno = page.pageIndex;
      this.refetch()
    });
  }
  }




