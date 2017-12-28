import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '@app/shared/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsersService {
  private usersUrl = 'api/users'; /** url for content */

  constructor(private http: HttpClient) { }

  /** Get Users from server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  /** Get User by id */
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url).pipe();
  }
}
