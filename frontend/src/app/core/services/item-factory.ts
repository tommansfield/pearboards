import { Type } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemData } from '../models/item-data';
import { PostitComponent } from '../../items/postit/postit.component';
import { PostIt } from '../models/postit.model';
import { WeatherComponent } from '../../items/weather/weather.component';
import { Weather } from '../models/weather.model';
import { ItemComponent } from 'src/app/items/item/item.component';

export class ItemFactory {
  public static createItem(component: Type<any>): Item {
    const itemData: ItemData = this.generateItemData(component);
    return new Item(component, itemData);
  }

  private static generateItemData(component: Type<any>): ItemData {
    switch (component) {
      case PostitComponent: {
        return new PostIt();
      }
      case WeatherComponent: {
        return new Weather();
      }
    }
  }
}
