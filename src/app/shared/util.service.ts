import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable()
export class UtilService {

  constructor(private _location: Location) { }

  backToLastPage() {
    console.log('go back');
    this._location.back();
  }
}
