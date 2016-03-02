import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink, RouteParams } from 'angular2/router';
import { DataService } from '../shared/services/data.service';
import { BusinessProfile } from "./business-profile";
import { Merchant } from "./merchant";


@Component({
  selector: 'vouchers',
  providers: [DataService],
  templateUrl: 'app/vouchers/vouchers.component.html',
  directives: [CORE_DIRECTIVES, RouterLink]
})
export class VouchersComponent {

    title: string = 'Business Profile';
    merchants: any = [];
    access_token: string;
    active_merchant: Merchant;
    model: any;

    get diagnostic() { return JSON.stringify(this.model); }
    get diagnostic() { return JSON.stringify(this.active_merchant); }

    constructor(private dataService: DataService, private _routeParams: RouteParams) {}

    ngOnInit() {
      this.access_token = this._routeParams.get('id');
      this.dataService.getBusinessProfile(this.access_token).subscribe(
        data => { this.merchants = data, console.log(data);},
        err => { console.log(err);},
        () => { this.handleGetSuccess(); }
      );

      this.model = new BusinessProfile( null,null ,null );
    }

    handleGetSuccess() {
      console.log(this.merchants[0].merchant.title);
      let m = this.merchants;
      let merchants: any = [];
      for let key in m {
        if (m.hasOwnProperty(key)) {
          let tmpM = new Merchant(
            m[key].merchant.description,
            m[key].merchant.id,
            m[key].merchant.logo,
            m[key].merchant.supporting_docs,
            m[key].merchant.title,
            m[key].merchant.website
          );
          merchants.push(tmpM);
        }
      }
      console.log(merchants);
      this.merchants = merchants;
    }

    onChange(){
      console.log(this.active_merchant);
      // this.active_merchant = merchant;
    }
}
