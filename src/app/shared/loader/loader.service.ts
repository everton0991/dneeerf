import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LoaderState } from '@app/shared/loader/loader';

@Injectable()
export class LoaderService {

  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  public showLoader(): void {
    this.loaderSubject.next(<LoaderState>{show: true});
  }

  public hideLoader(): void {
    this.loaderSubject.next(<LoaderState>{show: false});
  }
}
