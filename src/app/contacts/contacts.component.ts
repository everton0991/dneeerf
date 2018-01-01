import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@app/shared/loader/loader.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private loaderService: LoaderService) {
    this.loaderService.showLoader();
  }

  ngOnInit() {
    this.loaderService.hideLoader();
  }

}
