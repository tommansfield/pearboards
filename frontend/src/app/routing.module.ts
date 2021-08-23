import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ActivatedRouteSnapshot } from '@angular/router';
import { PageComponent } from './pages/page/page.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [

  {
    path: '',
    component: PageComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalUrl = route.paramMap.get('externalUrl');
        window.open(externalUrl, '_self');
      },
    },
  ],
})
export class RoutingModule {}