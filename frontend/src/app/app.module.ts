import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { BoardComponent } from './boards/board/board.component';
import { PageComponent } from './pages/page/page.component';
import { ItemComponent } from './items/item/item.component';
import { BoardnavComponent } from './boards/boardnav/boardnav.component';
import { PostitComponent } from './items/postit/postit.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { CookieService } from 'ngx-cookie-service';
import { CustomHttpInterceptor } from './interceptor';
import { ItemDirective } from './core/directives/item.directive';
import { WeatherComponent } from './items/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoardComponent,
    PageComponent,
    ItemComponent,
    BoardnavComponent,
    PostitComponent,
    NotFoundComponent,
    ItemDirective,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
