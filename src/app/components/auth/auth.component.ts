import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Router, RouterLink } from 'angular2/router';
//import { Observable } from 'rxjs/Observable';
import { SpinnerComponent } from "../spinner/spinner.component";
import { DataService } from '../../shared/services/data.service';
import { User }    from './user';
import { Session } from './session'

@Component({
  selector: 'auth',
  providers: [DataService],
  templateUrl: 'app/components/auth/auth.component.html',
  directives: [SpinnerComponent, CORE_DIRECTIVES, RouterLink]
})

export class AuthComponent {

  model = new User("","");
  private title = "Login";
  private session:Session;
  private loading = false;

  private auth_error: any;
  private no_errors: boolean = true;
  router: Router;

  constructor(private dataService: DataService, private _router: Router) {
   this.router = _router }

  validateUser() {
    this.toggleLoading(true);
    this.no_errors = true;

    this.dataService.postValidate(this.model.email, this.model.password)
      .subscribe(
          data => { this.session = new Session(data.accessToken, data.name, data.email, data.role) },
          err => { this.handleValidateError(err.json().message); this.handlePostError(); },
          () => { this.handlePostSuccess(); }
      );
  }

  handleValidateError(msg: any){
    this.auth_error = msg;
    this.no_errors = false;
  }

  handlePostError(){
    this.toggleLoading(false);
    console.log(this.auth_error)
  }

  handlePostSuccess(){
    this.toggleLoading(false);
    this.router.parent.navigate(['BusinessProfile', {id: this.session.accessToken } ]);
  }

  toggleLoading(state: boolean) {
    this.loading = state;
  }

}
