import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
//import { Observable } from 'rxjs/Observable';
import { DataService } from '../shared/services/data.service';
import { Sorter } from '../shared/sorter';
import { FilterTextboxComponent } from './filterTextbox.component';
import { SortByDirective } from '../shared/directives/sortby.directive';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../shared/pipes/trim.pipe';
import { User }    from './user';
import { Session } from './session'

@Component({
  selector: 'auth',
  providers: [DataService],
  templateUrl: 'app/auth/auth.component.html',
  directives: [CORE_DIRECTIVES, RouterLink, FilterTextboxComponent, SortByDirective],
  pipes: [CapitalizePipe, TrimPipe]
})

export class AuthComponent {

  model = new User("hendrihavenga@gmail.com","password");
  submitted = false;

  constructor(private dataService: DataService) { }

  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  validateUser() {
    console.log("validateUser(" + this.model.email + "," + this.model.password + ")");
    var res = this.dataService.postValidate(this.model.email,this.model.password)
    .subscribe();
    // var res = this.dataService.getCustomers().subscribe();
    console.log(res);
    // AuthComponent.validateUser(this.model);
  }

}
