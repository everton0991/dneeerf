import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
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
