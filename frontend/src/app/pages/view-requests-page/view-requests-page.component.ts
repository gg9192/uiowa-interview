import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RequestTableService } from '../../services/request-table-service';
import { debounceTime } from 'rxjs';
import { distinctUntilChanged } from 'rxjs';
import { ErrorHandlerService } from '../../services/error-handler-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-requests-page',
  imports: [MatPaginatorModule, MatTableModule],
  templateUrl: './view-requests-page.component.html',
  styleUrl: './view-requests-page.component.css'
})
export class ViewRequestsPage implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfPurchase', 'amount']
  dataSource = new MatTableDataSource<any>([]);
  pageno = 1
  totalElements = 0
  pagesize = 0

  ngOnInit(): void {
    this.refetch()
  }

  onRowClick(element: any) {
    const id = element.id
    this.router.navigate([`/view/${id}`])
  }

  constructor(private fetchService: RequestTableService, private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  refetch() {
    this.fetchService.getPaginatedData(this.pageno).subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data.items)
        this.totalElements = data.totalItems
      },
      error: (error) => {
        this.errorHandler.handleError(error)
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator.page.pipe(
      debounceTime(100), // Wait for 300ms after the last page change
      distinctUntilChanged((prev, curr) => prev.pageIndex === curr.pageIndex && prev.pageSize === curr.pageSize) // Only emit if the page or page size has changed
    ).subscribe((page) => {
      this.pageno = page.pageIndex;
      this.refetch();
    });
  }


}

