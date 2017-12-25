import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { ProfileComponent } from '@app/profile/profile.component';

@NgModule({
  imports: [
    SharedModule
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
