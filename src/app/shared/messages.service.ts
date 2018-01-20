import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Message } from '@app/shared/message';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MessagesService {
  private _url = 'api/messages'; /** url for content */

  constructor(private _http: HttpClient) { }

  /** Get Messages from server */
    getMessages(): Observable<Message[]> {
        return this._http.get<Message[]>(this._url);
  }
}
