import { Component, ViewChild, Input, OnInit, AfterViewInit } from '@angular/core';
import { RequestTableService } from '../../services/request-table-service';
import { debounceTime } from 'rxjs';
import { distinctUntilChanged } from 'rxjs';
import { ErrorHandlerService } from '../../services/error-handler-service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { ProcurementRequestTableItem } from '../../interfaces/response.interface';

@Component({
  selector: 'app-table',
  imports: [MatPaginator, MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfPurchase', 'amount']
  
  dataSource: MatTableDataSource<ProcurementRequestTableItem> | null = null
  totalElements = 0
  pagesize = 0
  pageno = 0

  constructor (private fetchService: RequestTableService, private errorHandler: ErrorHandlerService,private router: Router) {}

  onRowClick(element: any) {
    const id = element.id
    this.router.navigate([`/view/${id}`])
  }




  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.refetch()
  }

  refetch() {
    this.fetchService.getPaginatedData(this.pageno).subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data.items)
        console.log(data)
        
      },
      error: (error) => {
        this.errorHandler.handleError(error)
      }
    })
  }

  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      debounceTime(100), // Wait for 300ms after the last page change
      distinctUntilChanged((prev, curr) => prev.pageIndex === curr.pageIndex && prev.pageSize === curr.pageSize) // Only emit if the page or page size has changed
    ).subscribe((page) => {
      this.pageno = page.pageIndex;
      this.pagesize = page.pageSize;
    });
  }
  }




