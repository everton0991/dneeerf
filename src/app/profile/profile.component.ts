import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProfileService } from '@app/profile/profile.service';
import { Profile } from '@app/profile/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() profile: Profile;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getUser();
  }

  /** Return user from service */
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getUser(id)
      .subscribe(profile => this.profile = profile);
  }
}
