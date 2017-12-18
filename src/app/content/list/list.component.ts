import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { ContentService } from '../content.service';
import { LoaderService } from '../../loader/loader.service';
import { List } from '../list/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol','actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private contentService: ContentService,
    private loaderService: LoaderService
  ) { }
  
  ngOnInit() {
    this.loaderService.showLoader();
    this.getList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getList(): void {
    this.contentService.getList()
      .subscribe((list) => {
        this.dataSource.data = list;
        this.loaderService.hideLoader();        
      });
  }
}