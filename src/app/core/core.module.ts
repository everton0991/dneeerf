import { NgModule, Optional, SkipSelf } from '@angular/core';

import { MenuModule } from '@app/core/menu/menu.module';
import { HeaderModule } from '@app/core/header/header.module';
import { ContentModule } from '@app/content/content.module';
import { DashboardModule } from '@app/dashboard/dashboard.module';
import { AuthService } from '@app/login/auth.service';
import { ContentService } from '@app/content/content.service';
import { MenuService } from '@app/core/menu/menu.service';
import { LoaderService } from '@app/shared/loader/loader.service';
import { MessagesService } from '@app/shared/messages.service';
import { ContactsComponent } from '@app/contacts/contacts.component';
import { throwIfAlreadyLoaded } from '@app/core/module-import.guard';
import { AuthGuard } from '@app/guards/auth-guard';

@NgModule({
  exports: [
    MenuModule,
    HeaderModule,
    ContentModule,
    DashboardModule
  ],
  declarations: [
    ContactsComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    ContentService,
    MenuService,
    LoaderService,
    MessagesService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
