import { Injectable } from '@angular/core';

import { List } from './list/list';
import { ELEMENTS } from './list/list-mock';

@Injectable()
export class ContentService {

  constructor() { }

  getList(): List[] {
    return ELEMENTS;
  }
}
