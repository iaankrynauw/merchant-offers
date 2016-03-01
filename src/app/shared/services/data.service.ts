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

    constructor(private http: Http) { }

    postValidate(email: string, password: string) : Observable {
        // console.log("postValidate(" + email + "," + password + ")");
        // return JSON.stringify({"email": email, "password": password});
        let body = JSON.stringify({"email": email, "password": password});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        console.log(body);
        console.log(options);

        return this.http.post(this.stageBaseUrlAuth, body, options )
                        .map( (res: Response)  => res.json() )
                        .catch(this.handleError);
    }

    getCustomers() {
        return this.http.get('/src/customers.json')
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }

    getBusinessProfile(accessToken: string)
    {
            let headers = new Headers({ 'Content-Type': 'application/json' , 'X-Auth-Token' : accessToken });
            let options = new RequestOptions({ headers: headers });

            return this.http.get(stageBaseUrlBusinessProfile, options)
                            .map((res: Response) => res.json())
                            .catch(this.handleError);
    }


    getOrders(){
      return this.http.get(this.baseUrl + '/orders.json')
                      .map((res: Response) => res.json())
                      .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
