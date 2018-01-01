import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/login/auth.service';

import { UsersService } from '@app/shared/users.service';
import { User } from '@app/shared/user';
import { MessagesService } from '@app/shared/messages.service';
import { Message } from '@app/shared/message';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() navToggle = new EventEmitter<boolean>();
  title: String = 'Teste';
  appname: String = 'My App';
  user: User;
  messages: Message[];  

  constructor(
    private router: Router,
    private authService: AuthService,
    private usersService: UsersService,
    private messageService: MessagesService
  ) { }

  ngOnInit() {
    this.getUser();
    this.getMessages();
  }

  /** emit nav open status */
  navOpen() {
    this.navToggle.emit(true);
  }

  /** Return user from service */
  getUser(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    const id = 1;
    this.usersService.getUser(id)
      .subscribe((user) => {
        this.user = user;
      });
  }

  /** Return messages for user */
  getMessages(): void {
    this.messageService.getMessages()
      .subscribe((messages) => {
        this.messages = messages;
      });
  }

  /** Log user out */
  logout() {
    this.authService.userLoggedEmitter.emit(false);
    this.router.navigate(['/']);
  }
}
