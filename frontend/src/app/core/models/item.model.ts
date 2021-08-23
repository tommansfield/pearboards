import { Type } from '@angular/core';
import { ItemData } from './item-data';

export class Item {
  constructor(public component: Type<any>, public data: ItemData) {}
}
