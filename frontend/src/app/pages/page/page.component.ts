import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ItemDirective } from '../../core/directives/item.directive';
import { ItemComponent } from '../../items/item/item.component';
import { Item } from '../../core/models/item.model';
import { PostitComponent } from '../../items/postit/postit.component';
import { ItemFactory } from '../../core/services/item-factory';
import { PostIt } from '../../core/models/postit.model';
import { WeatherComponent } from 'src/app/items/weather/weather.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  items: Item[];
  @ViewChild(ItemDirective, { static: true }) itemHost: ItemDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    //  this.items.forEach(item => this.loadComponent(item))
  }

  public loadItem(item: Item) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      ItemComponent
    );
    const viewContainerRef = this.itemHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.item = item;
  }

  public createPostItItem(): void {
    const postIt: Item = ItemFactory.createItem(PostitComponent);
    this.loadItem(postIt);
  }

  public createWeatherItem(): void {
    const weather: Item = ItemFactory.createItem(WeatherComponent);
    this.loadItem(weather);
  }
}
