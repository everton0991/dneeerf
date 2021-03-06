import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { SidebarComponent } from '@app/core/menu/sidebar/sidebar.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [
    SidebarComponent
  ]
})
export class MenuModule { }
