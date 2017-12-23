import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { LoaderModule } from '@app/shared/loader/loader.module';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LoaderModule,
    MatIconModule,
    MatButtonModule 
  ],
  providers: []
})
export class SharedModule { }
