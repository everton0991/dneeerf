import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { LoaderModule } from '@app/loader/loader.module';

import { LoaderService } from '@app/loader/loader.service';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    LoaderModule,
    MatIconModule,
    MatButtonModule 
  ],
  providers: [
    LoaderService,
  ]
})
export class SharedModule { }
