import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { ContentService } from '@app/content/content.service';
import { LoaderService } from '@app/shared/loader/loader.service';
import { List } from '@app/content/list/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _contentService: ContentService,
    private _loaderService: LoaderService
  ) {
    this._loaderService.showLoader();
  }

  ngOnInit() {
    this.getList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getList(): void {
    this._contentService.getList()
      .subscribe((list) => {
        this.dataSource.data = list;
        this._loaderService.hideLoader();
      });
  }
}
