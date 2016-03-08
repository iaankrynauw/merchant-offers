import { Injectable } from 'angular2/core';
import { Http, Headers, RequestOptions, Response } from 'angular2/http';

//Grab everything with import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class DataService {

    stageBaseUrlAuth: string = 'https://stageadmin.ttrumpet.com/v2.0/merchant/sign_in';
    stageBaseUrlBusinessProfile: string = 'https://stageadmin.ttrumpet.com/v2.0/merchant/business_profile';
    stageBaseUrlBusinessPlaces: string = 'https://stageadmin.ttrumpet.com/v2.0/merchant/|#1|/business_places';
    stageBaseUrlRedeemCall: string = 'https://stageadmin.ttrumpet.com/v1.0/redemptions';

    constructor(private http: Http) { }

    postValidate(email: string, password: string){
        let body = JSON.stringify({"email": email, "password": password});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.stageBaseUrlAuth, body, options )
                        .map( (res: Response)  => res.json() )
                        .catch(this.handleError);
    }

    getCustomers() {
        return this.http.get('/src/customers.json')
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }

    getBusinessProfile(accessToken: string){
            let headers = new Headers({ 'Content-Type': 'application/json' , 'X-Auth-Token' : accessToken });
            let options = new RequestOptions({ headers: headers });

            return this.http.get(this.stageBaseUrlBusinessProfile, options)
                            .map((res: Response) => res.json())
                            .catch(this.handleError);
    }

    getBusinessPlaces( accessToken:string, active_merchant: string ){
        let headers = new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': accessToken });
        let options = new RequestOptions({ headers: headers });
        let url = this.insertTokenIntoUrl(active_merchant, this.stageBaseUrlBusinessPlaces);
        return this.http.get( url, options)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    postRedeemCall(accessToken: string, model: any) {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json', 'X-Auth-Token': accessToken });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.stageBaseUrlRedeemCall, body, options)
            .map((res: Response) => res)
            .catch(this.handleError);
    }


    private insertTokenIntoUrl(token: string, url: string): string{
        return url.replace("|#1|", token);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }

}
