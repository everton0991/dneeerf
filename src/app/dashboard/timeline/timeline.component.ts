import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';

import { UsersService } from '@app/shared/users.service';
import { User } from '@app/shared/user';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input() users: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  /** Return users from service */
  getUsers(): void {
    this.usersService.getUsers()
      .subscribe((users) => {
        this.users = users;
      });
  }
}
