import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { AuthComponent } from './components/auth/auth.component';
import { VouchersComponent } from './components/vouchers/vouchers.component';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacyPolicyComponent } from './components/terms/privacy-policy.component';
import { SoftwareLicenseComponent } from './components/terms/software-license.component';
import {htmlApp} from './app.html';

@Component({
  selector: 'app-container',
  directives: [ROUTER_DIRECTIVES],
  template: htmlApp
})
@RouteConfig([
  { path: '/', as: 'Auth', component: AuthComponent, useAsDefault: true },
  { path: '/business_profile/:id', as: 'BusinessProfile', component: VouchersComponent    },
  { path: '/terms_and_conditions/', as: 'Terms', component: TermsComponent    },
  { path: '/terms_and_conditions/privacy', as: 'PrivacyPolicy', component: PrivacyPolicyComponent    },
  { path: '/terms_and_conditions/software-license', as: 'SoftwareLicense', component: SoftwareLicenseComponent    }
])
export class AppComponent {

  constructor() {

  }

}
