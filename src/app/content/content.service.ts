import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { List } from './list/list';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContentService {

  private contentUrl = 'api/itens'; /** url for content */

  constructor(private http: HttpClient) { }

  /** Get list from server */
  getList(): Observable<List[]> {
    return this.http.get<List[]>(this.contentUrl);
  }
}
