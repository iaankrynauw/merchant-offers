import { Component, Input, Output, OnChanges, SimpleChange } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink, RouteParams } from 'angular2/router';
import { DataService } from '../shared/services/data.service';
import { BusinessProfile } from "./business-profile";
import { Merchant } from "./merchant";
import { Store } from "./store";


@Component({
  selector: 'vouchers',
  providers: [DataService],
  templateUrl: 'app/vouchers/vouchers.component.html',
  directives: [CORE_DIRECTIVES, RouterLink]
})
export class VouchersComponent {

    title: string = 'Business Profile';

    @Input() access_token: string;
    @Input() merchants: any[] = [];
    @Input() stores: any[] = [];
    @Input() model: any;

    get diagnostic() { return (JSON.stringify(this.model)); }

    constructor(private dataService: DataService, private _routeParams: RouteParams) {}

    ngOnInit() : void {
      this.access_token = this._routeParams.get('id');
      this.dataService.getBusinessProfile(this.access_token).subscribe(
        data => { this.merchants = data, console.log(data);},
        err => { console.log(err);},
        () => { this.handleGetSuccess(); }
      );

      this.model = new BusinessProfile( null,null ,null , null);
    }

    handleGetSuccess() : void {
      let m = this.merchants;
      var merchants: any[] = [];
      for (var key in m ) {
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
      // console.log(merchants);
      this.merchants = merchants;
    }

    getStores() {
      console.log(this.model.merchant_id);
      if (this.model.merchant_id != null) {
        this.dataService.getBusinessPlaces(this.access_token, this.model.merchant_id).subscribe(
          data => { this.stores = data, console.log(data); },
          err => { console.log(err); },
          () => { this.handleGetBusinessPlacesSuccess(); }
        );
      }
      // this.active_merchant = merchant;
    }

    handleGetBusinessPlacesSuccess() : void {
      let s = this.stores;
      var stores: any[] = [];
      for (var key in s) {
        if (s.hasOwnProperty(key)) {
          let tmpS = new Store(
            s[key].location_name,
            s[key].name,
            s[key].status,
            s[key].store_id
          );
          stores.push(tmpS);
        }
      }
      console.log(stores);
      this.stores = stores;
    }
}

// export class Store {
//   constructor(
//     public location_name: string,
//     public name: string,
//     public status: string,
//     public store_id: number,
//   ) { }
// }
