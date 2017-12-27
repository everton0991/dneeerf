import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { LoaderService } from '@app/shared/loader/loader.service';
import { ProfileService } from '@app/profile/profile.service';
import { Profile } from '@app/profile/profile';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() users: Profile[];

  constructor(
    private loaderService: LoaderService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.loaderService.showLoader();
    this.getUsers();
  }

  /** Return users from service */
  getUsers(): void {
    this.profileService.getUsers()
      .subscribe((users) => {
        this.users = users;
        this.loaderService.hideLoader();
      });
  }
}
