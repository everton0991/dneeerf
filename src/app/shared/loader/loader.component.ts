import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LoaderService } from '@app/shared/loader/loader.service';
import { LoaderState } from '@app/shared/loader/loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {

  show: Boolean = false;
  private _subscription: Subscription;

  constructor(private _loaderService: LoaderService) { }

  ngOnInit() {
    this._subscription = this._loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
