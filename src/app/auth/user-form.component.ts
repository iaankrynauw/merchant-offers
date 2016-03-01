import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { User }    from './user';


@Component({
  selector: 'user-form',
  templateUrl: './app/auth/user-form.html'
})
export class UserFormComponent {
  model = new User("","");
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
