import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import {Http} from 'angular2/http';
//import { Observable } from 'rxjs/Observable';
import { DataService } from '../shared/services/data.service';
import { Sorter } from '../shared/sorter';
import { FilterTextboxComponent } from './filterTextbox.component';
import { SortByDirective } from '../shared/directives/sortby.directive';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../shared/pipes/trim.pipe';
import { User }    from './user';

@Component({
  selector: 'auth',
  providers: [DataService],
  templateUrl: 'app/auth/auth.component.html',
  directives: [CORE_DIRECTIVES, RouterLink, FilterTextboxComponent, SortByDirective],
  pipes: [CapitalizePipe, TrimPipe]
})

export class AuthComponent {

  model = new User("test@case","test");
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  getUser() {
    console.log("getUser(" + this.model.email + "," + this.model.password + ")");
    this.validateUser(this.model.email,this.model.password);
    // AuthComponent.validateUser(this.model);
  }

  validateUser(email: string, password: string){
    console.log("validateUser(" + email + " " + password + ")");
// ajax call

  }

}
