import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef,
  ElementRef,
} from '@angular/core';
import { Item } from 'src/app/core/models/item.model';
import { ItemDirective } from 'src/app/core/directives/item.directive';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @ViewChild(ItemDirective, { static: true }) itemHost: ItemDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private host: ElementRef<HTMLElement>
  ) {}

  public ngOnInit(): void {
    this.loadItemContent();
  }

  private loadItemContent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.item.component
    );
    const viewContainerRef: ViewContainerRef = this.itemHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef: ComponentRef<any> = viewContainerRef.createComponent(
      componentFactory
    );
    componentRef.instance.data = this.item.data;
  }

  public removeChild(): void {
    this.host.nativeElement.remove();
  }
}
