'use strict';

import { Component, Input, Output, OnChanges, SimpleChange } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink, RouteParams } from 'angular2/router';
import { DataService } from '../../shared/services/data.service';
import { SpinnerComponent } from "../spinner/spinner.component";
import { BusinessProfile } from "./business-profile";
import { Merchant } from "./merchant";
import { Store } from "./store";


@Component({
  selector: 'vouchers',
  providers: [DataService],
  templateUrl: 'app/components/vouchers/vouchers.component.html',
  directives: [SpinnerComponent, CORE_DIRECTIVES, RouterLink]
})
export class VouchersComponent {
    public auth_error: any;

    title: string = 'Business Profile';
    access_token: string;
    merchants: any[] = [];
    stores: any[] = [];
    model: any;
    loading: boolean = true;

    private postResponse: any;

    get diagnostic() { return (JSON.stringify(this.model)); }

    constructor(private dataService: DataService, private _routeParams: RouteParams) {}

    ngOnInit() : void {
      this.access_token = this._routeParams.get('id');
      this.dataService.getBusinessProfile(this.access_token).subscribe(
        data => { this.merchants = data;},
        err => { console.log(err);},
        () => { this.handleGetBusinessProfileSuccess(); }
      );

      this.model = new BusinessProfile( null,null ,null , null);
    }

    handleGetBusinessProfileSuccess() : void {
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
      this.merchants = merchants;
      this.toggleLoading(false);
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
      this.stores = stores;
      this.toggleLoading(false);
    }


    getStores(merchant_id: any) {
      this.model.merchant_id = merchant_id;
      this.toggleLoading(true);
      if (this.model.merchant_id != null) {
        this.dataService.getBusinessPlaces(this.access_token, this.model.merchant_id).subscribe(
          data => { this.stores = data;},
          err => { console.log(err); this.toggleLoading(false); },
          () => { this.handleGetBusinessPlacesSuccess(); }
        );
      }
      // this.active_merchant = merchant;
    }
    getTest(store_id: any){
      console.log(store_id);
    }

    submit(){
      this.toggleLoading(true);
      console.log(this.model);
      this.dataService.postRedeemCall(this.access_token, this.model).subscribe(
        data => { this.postResponse = data, console.log(this.postResponse); },
        err => { console.log(err); this.toggleLoading(false); },
        () => { this.handleRedeemCallSuccess(); }
      );
    }

    handleRedeemCallSuccess(){
      console.log("Redeem Success");
    }

    toggleLoading(state: boolean){
      this.loading = state;
    }

}
