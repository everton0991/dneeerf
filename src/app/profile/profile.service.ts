import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Profile } from '@app/profile/profile';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProfileService {
  private usersUrl = 'api/users'; /** url for content */

  constructor(private http: HttpClient) { }

  /** Get Users from server */
  getUsers(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.usersUrl);
  }

  /** Get User by id */
  getUser(id: number): Observable<Profile> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<Profile>(url).pipe();
  }
}
