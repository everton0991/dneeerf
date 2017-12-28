import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '@app/shared/shared.module';

import { UsersService } from '@app/shared/users.service';
import { DashboardComponent } from '@app/dashboard/dashboard.component';
import { ProfileComponent } from '@app/dashboard/profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  imports: [
    MatTabsModule,
    MatListModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    ProfileComponent,
    TimelineComponent
  ],
  providers: [
    UsersService
  ]
})
export class DashboardModule { }
