import { NgModule, Optional, SkipSelf } from '@angular/core';

import { MenuModule } from '@app/core/menu/menu.module';
import { HeaderModule } from '@app/core/header/header.module';
import { ContentModule } from '@app/content/content.module';
import { DashboardModule } from '@app/dashboard/dashboard.module';
import { ProfileModule } from '@app/profile/profile.module';
import { ContentService } from '@app/content/content.service';
import { ProfileService } from '@app/profile/profile.service';
import { MenuService } from '@app/core/menu/menu.service';
import { LoaderService } from '@app/shared/loader/loader.service';
import { ContactsComponent } from '@app/contacts/contacts.component';
import { throwIfAlreadyLoaded } from '@app/core/module-import.guard';

@NgModule({
  exports: [
    MenuModule,
    HeaderModule,
    ContentModule,
    DashboardModule,
    ProfileModule
  ],
  declarations: [
    ContactsComponent
  ],
  providers: [
    ContentService,
    ProfileService,
    MenuService,
    LoaderService
  ]
})
export class CoreModule { 
  constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
