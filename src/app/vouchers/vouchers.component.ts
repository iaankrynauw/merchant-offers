import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink, RouteParams } from 'angular2/router';
import { DataService } from '../shared/services/data.service';
import { Voucher } from "./voucher";


@Component({
  selector: 'vouchers',
  providers: [DataService],
  templateUrl: 'app/vouchers/vouchers.component.html',
  directives: [CORE_DIRECTIVES, RouterLink]
})
export class VouchersComponent {

    model = new Voucher(this.merchants, "voucherCode123", 0.01);

    title: string = 'Business Profile';
    merchants: any = ["Business1","Business2"];
    accessToken: string;

    get diagnostic() { return JSON.stringify(this.model); }

    constructor(private dataService: DataService, private _routeParams: RouteParams) {

    }

    ngOnInit() {
      this.accessToken = this._routeParams.get('id');
      this.dataService.getBusinessProfile(this.accessToken).subscribe(
        data => { console.log(data);},
        err => { console.log(err);},
        () => { console.log("Success");}
      );
    }

}
