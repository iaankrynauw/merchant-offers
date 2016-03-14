import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Router, RouterLink } from 'angular2/router';
//import { Observable } from 'rxjs/Observable';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'my-software-license-policy',
  providers: [DataService],
  templateUrl: 'app/components/terms/software-license.html',
  directives: [CORE_DIRECTIVES, RouterLink]
})

export class SoftwareLicenseComponent {
  router: Router;

  constructor(private dataService: DataService, private _router: Router) {
    this.router = _router
  }

}
