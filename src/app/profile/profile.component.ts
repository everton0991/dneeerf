import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LoaderService } from '@app/shared/loader/loader.service';
import { ProfileService } from '@app/profile/profile.service';
import { Profile } from '@app/profile/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() profile: Profile;
  @Input() users: Profile[];

  constructor(
    private loaderService: LoaderService,
    private profileService: ProfileService,
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
    this.profileService.getUsers()
      .subscribe((users) => {
        this.users = users;
        this.loaderService.hideLoader();
      });
  }

  /** Return user from service */
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getUser(id)
      .subscribe((profile) => {
        this.profile = profile;
        this.loaderService.hideLoader();
      });
  }
}
