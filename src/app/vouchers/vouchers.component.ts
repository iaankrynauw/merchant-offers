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
    accessToken: string;
    model: any;
    get diagnostic() { return JSON.stringify(this.model); }

    constructor(private dataService: DataService, private _routeParams: RouteParams) {

    }

    ngOnInit() {
      this.accessToken = this._routeParams.get('id');
      this.dataService.getBusinessProfile(this.accessToken).subscribe(
        data => { this.merchants = data, console.log(data);},
        err => { console.log(err);},
        () => { this.handleGetSuccess(); }
      );

      this.model = new BusinessProfile(this.merchants, "voucherCode123", 0.01);

    }

    handleGetSuccess() {
      console.log(this.merchants[0].merchant.title);
      var m = this.merchants;
      var merchants = [];
      for var key in m {
        if (m.hasOwnProperty(key)) {
          // console.log(key + " -> " + m[key].merchant.title);
          var tmpM = new Merchant(
            m[key].merchant.description,
            m[key].merchant.id,
            m[key].merchant.logo,
            m[key].merchant.docs,
            m[key].merchant.title,
            m[key].merchant.website
          );
          merchants.push(tmpM);
        }
      }
      console.log(merchants);
      this.merchants = merchants;
    }
}

// export class Merchant {
//   constructor(
//     public desc: string,
//     public id: number,
//     public logo: string,
//     public docs: string,
//     public title: string,
//     public website: string
//   ) { }
// }

