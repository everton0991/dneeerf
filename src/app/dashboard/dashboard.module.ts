import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
