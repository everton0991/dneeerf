import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/login/auth.service';

import { User } from '@app/shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  url: String =  'http://www.dragonballz.com/';

  constructor(private _authservice: AuthService) { }

  ngOnInit() {
  }

  login() {
    this._authservice.login(this.user);
  }
}
