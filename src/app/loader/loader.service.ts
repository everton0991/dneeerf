import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LoaderState } from './loader';

@Injectable()
export class LoaderService {

  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  public showLoader(): void {
    console.log('showssd');
    this.loaderSubject.next(<LoaderState>{show: true});
  }

  public hideLoader(): void {
    console.log('hidesdsd');
    this.loaderSubject.next(<LoaderState>{show: false});
  }
}
