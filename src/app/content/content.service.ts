import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { List } from '@app/content/list/list';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContentService {

  private _url = 'api/itens';

  constructor(
    private _http: HttpClient
  ) { }

  /** Get list from server */
  getList(): Observable<List[]> {
    return this._http.get<List[]>(this._url);
  }

  /** Get content by position param from server */
  getContent(position: number): Observable<List> {
    const url = `${this._url}/${position}`;
    return this._http.get<List>(url);
  }
}
