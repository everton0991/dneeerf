import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { ContentService } from '@app/content/content.service';
import { UtilService } from '@app/shared/util.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  constructor(
    private _contentService: ContentService,
    private _router: Router,
    private _util: UtilService
  ) { }

  goBack() {
    this._util.backToLastPage();
  }

  createContent() {
    console.log('add new content and go back');
    this._router.navigate(['/content']);
  }
}
