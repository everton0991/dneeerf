import { Injectable } from '@angular/core';

import { Menu } from './sidebar/sidebar';
import { LINKS } from './sidebar/sidebar-mock';

@Injectable()
export class MenuService {

  constructor() { }

  getMenu(): Menu[] {
    return LINKS;
  }
}
