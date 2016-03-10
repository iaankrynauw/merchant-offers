import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Router, RouterLink } from 'angular2/router';
//import { Observable } from 'rxjs/Observable';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'my-privacy-policy',
  providers: [DataService],
  templateUrl: 'app/components/terms/privacy.html',
  directives: [CORE_DIRECTIVES, RouterLink]
})

export class PrivacyPolicyComponent {
  router: Router;

  constructor(private dataService: DataService, private _router: Router) {
    this.router = _router
  }

}
