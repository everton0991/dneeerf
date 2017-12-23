import { Injectable } from '@angular/core';

import { Menu } from '@app/core/menu/sidebar/sidebar';
import { LINKS } from '@app/core/menu/sidebar/sidebar-mock';

@Injectable()
export class MenuService {

  constructor() { }

  getMenu(): Menu[] {
    return LINKS;
  }
}
