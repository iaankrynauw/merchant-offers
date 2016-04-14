export const htmlAuth = `
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
       <a [routerLink]="['Auth']"><img src="images/ttrumpet.png"></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a [routerLink]="['Auth']">Home</a></li>
        <li><a [routerLink]="['Terms']">Terms and Conditions</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li ><a [routerLink]="['Auth']"><span class="glyphicon glyphicon-log-out"></span> Sign Out</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="alert alert-danger alert-dismissible" role="alert" [hidden]="no_errors">
  <button type="button" class="close" data-dismiss="alert" (click)="no_errors = !no_errors" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Error: </strong> {{ auth_error}}
</div>


<div class="container-fluid">
    <header>
          <div class="col-sm-6 col-sm-offset-3">
                <h3>
                    <span class="glyphicon glyphicon-user"></span>
                    {{ title }}
                </h3>
        </div>
    </header>
  <br />
</div>

  <div class="container-fluid">
      <div div class="col-sm-6 col-sm-offset-3">
        <form (ngSubmit)="validateUser()" #authForm="ngForm">
          <div class="form-group">
            <label for="auth-email">Email address</label>
            <input type="email" class="form-control" id="auth-email" required [(ngModel)]="model.email" ngControl="email"  #email="ngForm" >
            <div [hidden]="email.valid || email.pristine" class="alert alert-danger">
              Email address is required
            </div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" required
              [(ngModel)]="model.password"
                ngControl="password" placeholder="Password">
          </div>
          <button type="submit" [disabled]="!authForm.form.valid" class="btn btn-default">Login</button>
        </form>
      </div>

      <div class="row">
        <div class="sx-3"></div>
        <div class="sx-4">
          <div class="text-right">
                <my-spinner [isRunning]="loading"></my-spinner>
          </div>
        </div>
        <div class="sx-3"></div>
      </div>

    </div>



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
`;





