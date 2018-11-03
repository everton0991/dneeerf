import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userLogged: Boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.userLoggedEmitter
      .subscribe(userLogged => this.userLogged = userLogged);

    if (localStorage.getItem('user')) {
      this.userLogged = true;
    }
  }
}
