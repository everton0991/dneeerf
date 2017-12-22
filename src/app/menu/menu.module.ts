import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/shared/shared.module';

import { SidebarComponent } from '@app/menu/sidebar/sidebar.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [
    SidebarComponent
  ]
})
export class MenuModule { }
