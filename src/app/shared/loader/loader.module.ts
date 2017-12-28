import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoaderComponent } from '@app/shared/loader/loader.component';

@NgModule({
  imports: [
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoaderComponent
  ],
  declarations: [
    LoaderComponent
  ]
})
export class LoaderModule { }
