import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '@app/in-memory-data.service';
import { MatSidenavModule } from '@angular/material';

import { AppRoutingModule } from '@app/app-routing.module';
import { MenuModule } from '@app/menu/menu.module';
import { HeaderModule } from '@app/header/header.module';
import { ContentModule } from '@app/content/content.module';
import { DashboardModule } from '@app/dashboard/dashboard.module';
import { SharedModule } from '@app/shared/shared.module';

import { ContentService } from '@app/content/content.service';
import { MenuService } from '@app/menu/menu.service';

import { ContactsComponent } from '@app/contacts/contacts.component';
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MenuModule,
    HeaderModule,
    ContentModule,
    DashboardModule,
    MatSidenavModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    ContentService, 
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
