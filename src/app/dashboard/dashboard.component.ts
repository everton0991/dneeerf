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
  @Input() profile: User;
  @Input() posts: any[] = [];

  constructor(
    private loaderService: LoaderService,
    private usersService: UsersService
  ) {
    this.loaderService.showLoader();
  }

  ngOnInit() {
    this.getUser();
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

  /** Return user from service */
  getUser(): void {
    // const id = +this.route.snapshot.paramMap.get('id');
    const id = 1;
    this.usersService.getUser(id)
      .subscribe((profile) => {
        this.profile = profile;
        this.loaderService.hideLoader();
      });
  }
}
