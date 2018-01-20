import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@app/shared/loader/loader.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private _loaderService: LoaderService) {
    this._loaderService.showLoader();
  }

  ngOnInit() {
    this._loaderService.hideLoader();
  }

}
