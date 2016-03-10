import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { AuthComponent } from './components/auth/auth.component';
import { VouchersComponent } from './components/vouchers/vouchers.component';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacyPolicyComponent } from './components/terms/privacy-policy.component';
import { SoftwareLicenseComponent } from './components/terms/software-license.component';

@Component({
  selector: 'app-container',
  template: `
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header col-sx-5">
        <a a [routerLink]="['Auth']"><img src="images/ttrumpet.png"></a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active"><a [routerLink]="['Auth']">Home</a></li>
        <li><a [routerLink]="['Terms']">Terms and Conditions</a></li>
      </ul>


      <ul class="nav navbar-nav navbar-right col-sx-5">
        <li ><a [routerLink]="['Auth']"><span class="glyphicon glyphicon-log-out"></span> Sign Out</a></li>
      </ul>
    </div>
  </nav>

  <router-outlet></router-outlet>


  <footer>
      <div class="navbar navbar-fixed-bottom">
          <div class="navbar-inner footer">
              <div class="container">
                  <footer>
                      <div class="row">
                          <div class="col-md-12">
                          </div>
                      </div>
                  </footer>
              </div>
          </div>
      </div>
  </footer>

  `,
  // templareUrl: 'app/app.html',
  directives: [ROUTER_DIRECTIVES]
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
