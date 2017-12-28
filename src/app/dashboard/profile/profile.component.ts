import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LoaderService } from '@app/shared/loader/loader.service';
import { UsersService } from '@app/shared/users.service';
import { User } from '@app/shared/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() profile: User;
  @Input() users: User[];

  constructor(
    private loaderService: LoaderService,
    private usersService: UsersService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.loaderService.showLoader();
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
