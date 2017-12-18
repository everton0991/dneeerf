import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MatSidenavModule } from '@angular/material';

import { AppRoutingModule } from './/app-routing.module';
import { MenuModule } from './menu/menu.module';
import { HeaderModule } from './header/header.module';
import { ContentModule } from './content/content.module';
import { LoaderModule } from './loader/loader.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { ContentService } from './content/content.service';
import { LoaderService } from './loader/loader.service';
import { MenuService } from './menu/menu.service';

import { ContactsComponent } from './contacts/contacts.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    HeaderModule,
    ContentModule,
    LoaderModule,
    DashboardModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    ContentService, 
    LoaderService, 
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
