import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { SharedModule } from '@app/shared/shared.module';

import { ListComponent } from '@app/content/list/list.component';
import { NewComponent } from '@app/content/new/new.component';
  import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    ListComponent
  ],
  declarations: [
    ListComponent,
    NewComponent,
    DetailComponent
  ]
})
export class ContentModule { }
