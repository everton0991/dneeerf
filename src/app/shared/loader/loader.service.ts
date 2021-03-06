import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LoaderState } from '@app/shared/loader/loader';

@Injectable()
export class LoaderService {

  private _loaderSubject = new Subject<LoaderState>();
  loaderState = this._loaderSubject.asObservable();

  constructor() { }

  public showLoader(): void {
    this._loaderSubject.next(<LoaderState>{show: true});
  }

  public hideLoader(): void {
    this._loaderSubject.next(<LoaderState>{show: false});
  }
}
