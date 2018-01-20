import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { ContentService } from '@app/content/content.service';
import { UtilService } from '@app/shared/util.service';
import { List } from '@app/content/list/list';
import { UsersService } from '@app/shared/users.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  position: number;
  content: List;

  constructor(
    private _contentService: ContentService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _util: UtilService
  ) {}

  ngOnInit() {
    this.position = this._route.snapshot.params['position'];
    this.getContent();
  }

  /** Go back to last page */
  goBack() {
    this._util.backToLastPage();
  }

  /** Get content by id */
  getContent() {
    this._contentService.getContent(this.position)
      .subscribe((content) => {
        this.content = content;
      });
  }

  /** update content */
  updateContent() {
    console.log('update new content and go back');
    this._router.navigate(['/content']);
  }
}
