import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '@app/shared/shared.module';

import { ProfileComponent } from '@app/profile/profile.component';

@NgModule({
  imports: [
    SharedModule,
    MatListModule
  ],
  exports: [
    ProfileComponent
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule {
  constructor () { }
}
