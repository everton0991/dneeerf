import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../sidebar/sidebar';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mainMenu = this.menuService.getMenu();

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

}
