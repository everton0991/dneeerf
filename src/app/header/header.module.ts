import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule   
  ],
  exports: [
    ToolbarComponent
  ],
  declarations: [
    ToolbarComponent
  ]
})
export class HeaderModule { }
