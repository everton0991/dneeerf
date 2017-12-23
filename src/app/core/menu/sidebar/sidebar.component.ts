import { Component, OnInit } from '@angular/core';
import { MenuService } from '@app/core/menu/menu.service';
import { Menu } from '@app/core/menu/sidebar/sidebar';
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
