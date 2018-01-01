import { Injectable } from '@angular/core';

import { User } from '@app/shared/user';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  private userAuthenticated: Boolean = false;

  userLoggedEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(user: User) {
    if (user.username === 'everton.renan.pc@gmail.com' &&
      user.password === 'q1w2e3') {
        this.userAuthenticated = true;
        this.userLoggedEmitter.emit(true);
        this.router.navigate(['/dashboard']);
    } else {
      this.userLoggedEmitter.emit(false);
    }
  }

  userIsAuthenticated() {
    return this.userAuthenticated;
  }
}
