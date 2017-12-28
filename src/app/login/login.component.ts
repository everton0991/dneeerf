import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/login/auth.service';

import { User } from '@app/shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User = new User();

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  login() {
    // console.log(this.user)
    this.authservice.login(this.user);
  }
}
