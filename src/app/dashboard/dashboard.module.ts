import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '@app/shared/shared.module';

import { DashboardComponent } from '@app/dashboard/dashboard.component';

@NgModule({
  imports: [
    SharedModule,
    MatTabsModule
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
