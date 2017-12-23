import { NgModule } from '@angular/core';
import { MatToolbarModule, MatMenuModule } from '@angular/material';
import { SharedModule } from '@app/shared/shared.module';

import { ToolbarComponent } from '@app/core/header/toolbar/toolbar.component';

@NgModule({
  imports: [
    SharedModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  exports: [
    ToolbarComponent
  ],
  declarations: [
    ToolbarComponent
  ]
})
export class HeaderModule { }
