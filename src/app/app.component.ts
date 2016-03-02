import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { AuthComponent } from './auth/auth.component';
import { VouchersComponent } from './vouchers/vouchers.component';

@Component({
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/', as: 'Auth', component: AuthComponent, useAsDefault: true },
  { path: '/business_profile/:id', as: 'BusinessProfile', component: VouchersComponent    }
])
export class AppComponent {

  constructor() {

  }

}
