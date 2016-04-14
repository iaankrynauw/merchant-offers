export const htmlVouchers  = `
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


<!-- {{diagnostic}} -->
<div class="alert alert-danger alert-dismissible" role="alert" [hidden]="no_errors">
  <button type="button" class="close" data-dismiss="alert" (click)="no_errors = !no_errors" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Error: </strong> {{ auth_error}}
</div>

<div class="alert alert-info alert-dismissible" role="alert" [hidden]="!redeem_success">
  <button type="button" class="close" data-dismiss="alert" (click)="redeem_success = !redeem_success" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Info: </strong> Redeem Success
</div>

<div class="row">
  <div class="col-sm-4 col-sm-offset-4">
    <h3><span class="glyphicon glyphicon-shopping-cart"></span>&nbsp;&nbsp;Account Profile</h3>
  </div>
</div>
<br>

<div class="container-fluid">

 <form role="form" class="form-horizontal col-sm-11 col-sm-offset-1"  #voucherForm="ngForm">

 <div class="form-group row">
    <div class="col-sm-8 col-xs-7">
      <label for="merchant control-label" class="account-profile-label" >{{title}}</label>
      <select class="form-control"  id="merchant" required [(ngModel)]="model.merchant_id" #merchant (change)="getStores(merchant.value)" >
        <option value="-1" selected >Please select an option below:</option>
        <option *ngFor = "#m of merchants" [value]="m.id" >{{m.title}}</option>
      </select>
    </div>


    <div class="text-right col-sm-2 col-xs-3">
      <my-spinner [isRunning]="loading"></my-spinner>
    </div>

  </div>


  <div class="form-group row">
    <div class="col-sm-8 col-xs-7">
     <label for="store">Stores</label>
     <select class="form-control" id="store" required [(ngModel)]="model.store_id" #store (change)="setStore(store.value)">
        <option value="-1" selected>Please select an option below:</option>
        <option *ngFor = "#s of stores" [value]="s.store_id" >{{s.name}}</option>
    </select>
  </div>
</div>

<div class="form-group row">

  <div class="col-sm-8 col-xs-7">
    <label for="discount-code control-label" class="account-profile-label" >Code</label>
    <input type="text" class="form-control" id="discount-code" placeholder="Enter Code" required [(ngModel)]="model.sparkflycode">
  </div>
</div>

<div class="form-group row">
  <div class="col-sm-8 col-xs-7">
    <label for="subtotal control-label" class="account-profile-label" >Amount</label>
    <input type="number" class="form-control" id="subtotal" placeholder="0.00" required [(ngModel)]="model.subtotal">
  </div>
</div>
<button type="submit" [disabled]="!voucherForm.form.valid" class="btn btn-default" (click)="submit()">Submit</button>
</form>


</div>
`;
