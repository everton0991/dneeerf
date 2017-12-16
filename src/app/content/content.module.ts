import { NgModule } from '@angular/core';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule
  ],
  exports: [
    ListComponent
  ],
  declarations: [
    ListComponent
  ]
})
export class ContentModule { }
