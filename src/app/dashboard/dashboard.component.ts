import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { LoaderService } from '@app/shared/loader/loader.service';
import { UsersService } from '@app/shared/users.service';
import { User } from '@app/shared/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() users: User[];

  constructor(
    private loaderService: LoaderService,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.loaderService.showLoader();
    this.getUsers();
  }

  /** Return users from service */
  getUsers(): void {
    this.usersService.getUsers()
      .subscribe((users) => {
        this.users = users;
        this.loaderService.hideLoader();
      });
  }
}
