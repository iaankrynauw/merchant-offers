import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Router, RouterLink } from 'angular2/router';
//import { Observable } from 'rxjs/Observable';
import { DataService } from '../shared/services/data.service';
import { Sorter } from '../shared/sorter';
import { User }    from './user';
import { Session } from './session'

@Component({
  selector: 'auth',
  providers: [DataService],
  templateUrl: 'app/auth/auth.component.html',
  directives: [CORE_DIRECTIVES, RouterLink]
})

export class AuthComponent {

  model = new User("hendrihavenga@gmail.com","password");
  title = "Login";
  session:Session;
  submitted = false;
  public auth_error: any;
  router: Router;
  get diagnostic() { return JSON.stringify(this.model); }

  constructor(private dataService: DataService, private _router: Router) {
   this.router = _router }

  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  validateUser() {
    this.auth_error = "";
    this.dataService.postValidate(this.model.email, this.model.password)
      .subscribe(
          data => { this.session = new Session(data.accessToken, data.name, data.email, data.role) },
          err => { this.auth_error = err.json().message; this.handlePostError(); },
          () => { this.handlePostSuccess(); }
      );
    // var res = this.dataService.getCustomers().subscribe( (res) => console.log(res));
  }

  handlePostError(){
    console.log(this.auth_error)
  }

  handlePostSuccess(){
    this.router.parent.navigate(['BusinessProfile', {id: this.session.accessToken } ]);
    console.log(this.session);
  }


}
