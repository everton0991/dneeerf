import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';

import { MenuModule } from '@app/menu/menu.module';
import { HeaderModule } from '@app/header/header.module';
import { ContentModule } from '@app/content/content.module';
import { DashboardModule } from '@app/dashboard/dashboard.module';

import { ContentService } from '@app/content/content.service';
import { MenuService } from '@app/menu/menu.service';

import { ContactsComponent } from '@app/contacts/contacts.component';

@NgModule({
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MenuModule,
    HeaderModule,
    ContentModule,
    DashboardModule
  ],
  declarations: [
    ContactsComponent
  ],
  providers: [
    ContentService,
    MenuService
  ]
})
export class CoreModule { }
