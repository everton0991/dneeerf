import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuModule } from './menu/menu.module';
import { HeaderModule } from './header/header.module';
import { ContentModule } from './content/content.module';
import { LoaderModule } from './loader/loader.module';

import { AppComponent } from './app.component';
import { ContentService } from './content/content.service';
import { MenuService } from './menu/menu.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    HeaderModule,
    ContentModule,
    LoaderModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ContentService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
