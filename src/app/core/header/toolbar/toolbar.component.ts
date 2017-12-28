import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/login/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  
  ngOnInit() {
  }

  title = 'Teste';
  appname = 'My App';
  user = {
    'id': 1,
    'name': 'Son Goku',
    'picture': 'http://sm.ign.com/ign_br/screenshot/default/goku_an6e.jpg',
  };
  messages = [
    { notification: 'New contact via Facebook', date: '30 min ago' },
    { notification: 'New contact via Google', date: '1 hours ago' },
    { notification: 'System update!', date: '1 hour and 45 min ago' },
    { notification: 'Bug report', date: '6 hours ago' },
    { notification: 'Disc space warning!', date: '6 hours ago' },
  ];

  @Output() navToggle = new EventEmitter<boolean>();
  
  navOpen() {
    this.navToggle.emit(true);
  }

  logout() {
    this.authService.userLoggedEmitter.emit(false);
    this.router.navigate(['/']);
  }
}
