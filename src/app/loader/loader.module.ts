import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { LoaderComponent } from './loader.component';

@NgModule({
  imports: [
    MatProgressBarModule,
  ],
  exports: [
    LoaderComponent
  ],
  declarations: [
    LoaderComponent
  ]
})
export class LoaderModule { }
